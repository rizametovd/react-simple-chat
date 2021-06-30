import './Main.css';
import MessageList from '../MessageList/MessageList';
import SendMessageForm from '../SendMessageForm/SendMessageForm';
import { useEffect, useState } from 'react';
import { fireBase } from '../../firebase/firebase';

/**
 * Отправляет и получает сообщения с сервера
 * @param props
 * @param props.userName Имя пользователя
 */
function Main({ userName }) {
  const [messages, setMessages] = useState([]);

  /**
   * БД FireBase
   * @type {Object}
   */
  const db = fireBase.database();

  /**
   * Срабатывает по клику на кнопке Отправить.
   * @param {Function} userInput Значение инпута — 'сообщение пользователя'
   */
  function handleUserMessage(userInput) {
    sendMessageToFireBase(userInput);
  }

  /**
   * Отправляет сообщения на сервер
   * @param {Function} userInput Значение инпута — 'сообщение пользователя'
   */
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
