import React from 'react';
import './footer.jsx';
import {
  Footer,
  Container,
  Col,
  Row,
  Icon,
  Btn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <Footer className='chat-app-footer'>
      <Container className='p-4 pb-0'>
        <section className='icons'>
          <Btn floating className= 'message' href='#!' role='button' >
            <Icon fab icon='fa-regular fa-message-smile' />
          </Btn>

          <Btn floating className='saved' href='#!' role='button'>
            <Icon fab icon= 'fa-regular fa-heart' />
          </Btn>

          <Btn floating className='channels' href='#!' role='button'>
            <Icon fab icon='fa-solid fa-hashtag' />
          </Btn>

        </section>
      </Container>

      
    </Footer>
  );
}