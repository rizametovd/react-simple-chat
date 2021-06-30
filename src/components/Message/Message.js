import './Message.css';

/**
 *
 * @param props
 * @param props.message Сообщение
 * @param props.userName Имя пользователя
 * @param props.lastMessageRef Реф на сообщение для авто-скролла
 */

function Message({ message, userName, lastMessageRef }) {
  /**
   * Определяет автора сообщения
   * @type {Boolean}
   */
  const isUserName = userName === message.name ? true : false;

  return (
    <>
      {!isUserName && (
        <li className='message__list-item' ref={lastMessageRef}>
          <div className='message__list-item-container'>
            <p className='message__list-item-username'>{message.name}</p>
            <p className='message__list-item-text'>{message.message}</p>
          </div>
        </li>
      )}

      {isUserName && (
        <li className='message__list-item' ref={lastMessageRef}>
          <div className='message__list-item-container message__list-item-user-response'>
            <p className='message__list-item-username message__list-item-username-response'>
              {message.name}
            </p>
            <p className='message__list-item-text message__list-item-user-response-text'>
              {message.message}
            </p>
          </div>
        </li>
      )}
    </>
  );
}

export default Message;
