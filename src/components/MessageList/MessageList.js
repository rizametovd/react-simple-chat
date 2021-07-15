import './MessageList.css';
import Message from '../Message/Message';
import { useEffect, useRef } from 'react';

function MessageList({ messages, userName }) {
  const lastMessageRef = useRef();

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
