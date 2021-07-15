import './Main.css';
import MessageList from '../MessageList/MessageList';
import SendMessageForm from '../SendMessageForm/SendMessageForm';
import { useEffect, useState } from 'react';
import { fireBase } from '../../firebase/firebase';

function Main({ userName }) {
  const [messages, setMessages] = useState([]);

  const db = fireBase.database();

  function handleUserMessage(userInput) {
    sendMessageToFireBase(userInput);
  }

  function sendMessageToFireBase(userInput) {
    const timeStamp = Date.now();
    db.ref('messages/' + timeStamp).set({
      message: userInput.message,
      name: userName,
    });
  }

  useEffect(() => {
    const fetchMessage = db.ref('messages/');

    fetchMessage.on('child_added', (snapshot) => {
      const messages = snapshot.val();
      setMessages((prevMessages) => [...prevMessages, messages]);
    });
  }, [db]);

  return (
    <section className='main'>
      <MessageList messages={messages} userName={userName} />
      <SendMessageForm handleUserMessage={handleUserMessage} />
    </section>
  );
}

export default Main;
