import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MAIN_PAGE, SIGN_IN } from '../../constants/constants';
import SignIn from '../SignIn/SignIn';
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  function handleSignIn(userName) {
    setUserName(userName);
    setLoggedIn(true);
  }

  return (
    <div className='page'>
      <Header />
      <Switch>
        {loggedIn && (
          <Route exact path={MAIN_PAGE}>
            <Main userName={userName} />
          </Route>
        )}

        {!loggedIn && (
          <Route path={SIGN_IN}>
            <SignIn handleSignIn={handleSignIn} />
          </Route>
        )}
        <Route>{loggedIn ? <Redirect to={MAIN_PAGE} /> : <Redirect to={SIGN_IN} />}</Route>
      </Switch>
    </div>
  );
}

export default App;
