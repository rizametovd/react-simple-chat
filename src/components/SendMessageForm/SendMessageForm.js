import { useEffect, useState } from 'react';
import './SendMessageForm.css';

function SendMessageForm({ handleUserMessage }) {
  const [inputValue, setInput] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  /**
   * Получает значение инпута и добавляет его в стейт inputValue
   * @param {Object} e Объект события
   */
  function handleInput(e) {
    /** Значение инпута */
    const userInput = e.target.value;
    setInput(userInput);
  }

  /**
   * Очищает поле ввода сообщения
   */
  function resetForm() {
    setInput('');
  }

  useEffect(() => {
    inputValue.length > 0 ? setIsDisabled(true) : setIsDisabled(false);
  }, [inputValue]);

  /**
   * Отменяет действие по-умолчанию на submit и передает значение стейта inputValue в функцию handleUserMessage
   * @param {Object} e Объект события
   */
  function handleSubmit(e) {
    e.preventDefault();
    handleUserMessage({
      message: inputValue,
    });

    resetForm();
  }

  function handleEnterPress(e) {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      handleSubmit(e);
    }
  }

  return (
    <section className='send-message'>
      <form className='send-message__form' onSubmit={handleSubmit}>
        <label className='send-message__form'>
          <textarea
            className='send-message__form-input'
            name='message-input'
            placeholder='Напишите что-нибудь...'
            value={inputValue || ''}
            onChange={handleInput}
            autoComplete='off'
            onKeyDown={handleEnterPress}
          />
        </label>
        <button className='send-message__submit-btn' type='submit' disabled={!isDisabled}>
          Отправить
        </button>
      </form>
    </section>
  );
}

export default SendMessageForm;
