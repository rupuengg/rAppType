import React from 'react';
import { Provider, connect } from 'react-redux';
import './App.css';
import store from '../../helpers/store';
import { createAction } from '../../actions/ActionTypes';

interface IApp {
  logging: Function,
}

export const App = (props: IApp) => {
  const handleLogin = () => {
    props.logging("", "");
  };

  return (
    <Provider store={store}>
      <div className="App" onClick={handleLogin}>
        App
      </div>
    </Provider>
  );
}

const mapDispatchToProps = () => {
  logging: (username: string, password: string) => createAction(username, password);
};

export default connect(null, mapDispatchToProps)(App);
