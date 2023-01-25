import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
// import Chat from '../components/Chat/Chat';

// const socket = io.connect('http://localhost:5000');

// function Messages() {
// 	const [username, setUsername] = useState('');
// 	const [room, setRoom] = useState('');
// 	const [showChat, setShowChat] = useState(false);

// 	const joinRoom = () => {
// 		if (username !== '' && room !== '') {
// 			socket.emit('join_room', room);
// 			setShowChat(true);
// 		}
// 	};

// 	return (
// 		<div className='App'>
// 			{!showChat ? (
// 				<div className='joinChatContainer'>
// 					<h3>Channels</h3>
// 					<input
// 						type='text'
// 						placeholder='User Name'
// 						onChange={(event) => {
// 							setUsername(event.target.value);
// 						}}
// 					/>
// 					<input
// 						type='text'
// 						placeholder='# Event-Room'
// 						onChange={(event) => {
// 							setRoom(event.target.value);
// 						}}
// 					/>
// 					<button onClick={joinRoom}>Join Channel</button>
// 				</div>
// 			) : (
// 				<Chat socket={socket} username={username} room={room} />
// 			)}
// 		</div>
// 	);
// }

// export default Messages;

function Messages({ socket, username, room }) {
	const [currentMessage, setCurrentMessage] = useState('');
	const [messageList, setMessageList] = useState([]);

	const sendMessage = async () => {
		if (currentMessage !== '') {
			const messageData = {
				room: room,
				author: username,
				message: currentMessage,
				time:
					new Date(Date.now()).getHours() +
					':' +
					new Date(Date.now()).getMinutes(),
			};

			await socket.emit('send_message', messageData);
			setMessageList((list) => [...list, messageData]);
			setCurrentMessage('');
		}
	};

	useEffect(() => {
		socket.on('receive_message', (data) => {
			setMessageList((list) => [...list, data]);
		});
	}, [socket]);

	return (
		<div className='chat-window'>
			<div className='chat-header'>
				<p>Live Chat</p>
			</div>
			<div className='chat-body'>
				{messageList.map((messageContent) => {
					return (
						<div
							className='message'
							id={username === messageContent.author ? 'you' : 'other'}
						>
							<div>
								<div className='message-content'>
									<p>{messageContent.message}</p>
								</div>
								<div className='message-meta'>
									<p id='time'>{messageContent.time}</p>
									<p id='author'>{messageContent.author}</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className='chat-footer'>
				<input
					type='text'
					value={currentMessage}
					placeholder='Message'
					onChange={(event) => {
						setCurrentMessage(event.target.value);
					}}
					onKeyPress={(event) => {
						event.key === 'Enter' && sendMessage();
					}}
				/>
				<button onClick={sendMessage}>&#9658;</button>
			</div>
		</div>
	);
}

export default Messages;
