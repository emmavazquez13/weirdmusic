/* eslint-disable react/prop-types */
import React from "react"

const ChatBody = ({ messageArray, chatRef }) => {
    if (messageArray?.length) {
        return (
            <>
                <div
                    className="bg-gray-dark overflow-y-auto flex-grow"
                    ref={chatRef}
                >
                    {messageArray.map((item) => (
                        <div className="flex m-2">
                            <div className="bg-gray-light-500 max-w-prose ml-auto p-2 text-white rounded-xl rounded-br-none">
                                {item}
                            </div>
                        </div>
                    ))}
                </div>
            </>
        )
    }
    return (
        <div className="bg-gray-dark text-center flex justify-center items-center flex-grow font-medium text-xl">
            This is the beginning of your conversation!
        </div>
    )
}

export default ChatBody         
