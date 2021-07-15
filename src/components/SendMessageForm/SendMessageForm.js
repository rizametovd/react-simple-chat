import { useEffect, useState } from 'react';
import './SendMessageForm.css';

function SendMessageForm({ handleUserMessage }) {
  const [inputValue, setInput] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  function handleInput(e) {
    const userInput = e.target.value;
    setInput(userInput);
  }

  function resetForm() {
    setInput('');
  }

  useEffect(() => {
    inputValue.length > 0 ? setIsDisabled(true) : setIsDisabled(false);
  }, [inputValue]);

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
