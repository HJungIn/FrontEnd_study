import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'; //redux사용
import { createStore, applyMiddleware } from 'redux'; // redux는 store만들기 필요
import rootReducer, { rootSaga } from './modules';
import Thunk from 'redux-thunk'; //Thunk 적용하기
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(rootReducer, applyMiddleware(Thunk)); //store만들기
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  //Provider 사용
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
