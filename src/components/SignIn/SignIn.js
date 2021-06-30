import { useEffect, useState } from 'react';
import './SignIn.css';

/**
 * Авторизирует пользователя после ввода имени
 * @param props
 * @param props.handleSignIn Функция, которая устанавливает стейт name в App.js
 */
function SignIn({ handleSignIn }) {
  const [name, setName] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    name.length >= 2 ? setIsDisabled(true) : setIsDisabled(false);
  }, [name]);

  function handleUserName(e) {
    setName(e.target.value);
  }

  /**
   * По клику на submit вызывает handleSignIn(name) и записивывает введенное пользователем имя в стейт userName
   * @param {Object} e Объект события
   */
  function handleSubmit(e) {
    e.preventDefault();
    handleSignIn(name);
  }

  return (
    <section className='signin'>
      <form className='signin__form' onSubmit={handleSubmit} noValidate>
        <h1 className='signin__form-text'>Как вас зовут?</h1>
        <label className='signin__form-label'>
          <input
            className='signin__form-input'
            type='text'
            placeholder='Ваше имя'
            minLength='5'
            maxLength='20'
            required
            onChange={handleUserName}
          />
        </label>

        <button className='signin__submit-btn' type='submit' disabled={!isDisabled}>
          Сохранить
        </button>
      </form>
    </section>
  );
}

export default SignIn;
