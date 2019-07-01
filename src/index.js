import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RootStore from './stores'

const root = new RootStore();

ReactDOM.render(
  // <Provider counter={counter} market={market}>
  // this.root.counter.number 와 같이 접근 가능
  <Provider {...root}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
