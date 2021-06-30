import './MessageList.css';
import Message from '../Message/Message';
import { useEffect, useRef } from 'react';

/**
 * Рендерит сообщения в чате
 * @param props
 * @param props.messages Сообщения
 * @param props.userName Имя пользователя
 */

function MessageList({ messages, userName }) {
  const lastMessageRef = useRef();

  /**
   * Прокручивает страницу вниз до последнего сообщения
   */
  function scrollToBottom() {
    lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    if (messages.length > 0) {
      scrollToBottom();
    }
  });

  return (
    <ul className='message-list'>
      {messages.map((item, i) => (
        <Message key={i} message={item} userName={userName} lastMessageRef={lastMessageRef} />
      ))}
    </ul>
  );
}

export default MessageList;
