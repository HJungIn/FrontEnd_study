import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware  } from 'redux'; //applyMiddleware로 미들웨어 적용하기
import { Provider } from 'react-redux'; //리덕스 사용하기
import rootReducer from './modules';
import myLogger from './middlewares/myLogger';
import logger from 'redux-logger'; //redux-logger 사용하기
import {composeWithDevTools} from 'redux-devtools-extension'; //devtools와 미들웨어 같이 쓰기

// const store = createStore(rootReducer, applyMiddleware(myLogger));  //applyMiddleware로 미들웨어 적용하기
// const store = createStore(rootReducer, applyMiddleware(myLogger, logger)); //이렇게 하면 myLogger가 첫번째 미들웨어, logger가 두번째 미들웨어
// const store = createStore(rootReducer, applyMiddleware(logger)); //이렇게만으로 사용 가능
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger))); // devtools와 미들웨어 같이 쓰기

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
