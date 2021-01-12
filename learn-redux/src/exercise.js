import { createStore } from 'redux'; // createStore: 스토어를 만들어주는 함수
// createStore는 스토어를 만들어주는 함수입니다.
// 리액트 프로젝트에서는 단 하나의 스토어를 만듭니다.

/* 리덕스에서 관리 할 상태의 초기값 정의 */
const initialState = {
  counter: 0,
  text: '',
  list: []
};

/* 액션 타입 정의 : 액션 타입은 주로 대문자로 작성 */
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

/* 액션 생성함수 정의 : 액션 생성함수는 주로 소문자의 이름와 화살표함수로 작성 */
function increase() {
  return {
    type: INCREASE // 액션 객체에는 type 값이 필수입니다.
  };
}

// 화살표 함수로 작성하는 것이 더욱 코드가 간단하기에, 이렇게 쓰는 것을 추천함
const decrease = () => ({
  type: DECREASE
});

const changeText = text => ({
  type: CHANGE_TEXT,
  text // 액션안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있습니다.
});

const addToList = item => ({
  type: ADD_TO_LIST,
  item
});


/* 리듀서 만들기 : 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여 새로운 상태를 만드는 함수를 만들기 */
// 주의: 리듀서에서는 불변성을 꼭 지켜줘야 합니다!
function reducer(state = initialState, action) { // state 의 초깃값을 initialState 로 지정했습니다.
  switch (action.type) { //action의 타입에 따라
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item) //배열의 불변성 유지
      };
    default:
      return state; //default인 경우 state를 유지시키기! (리덕스는 그렇습니다.)
  }
}

/* 스토어 만들기 */
const store = createStore(reducer); //파라미터로 리듀서 넣기
console.log(store.getState()); // 현재 store 안에 들어있는 상태를 조회

// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수 => 구독 : 스토어의 상태가 업데이트 될 때마다 특정 함수를 호출할 수 있다.
const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener); 
// unsubscribe(); //: 구독을 해제하고 싶을 때는 이 unsubscribe();를 호출 => 이제 호출하고 싶지 않을 떄

// 액션들을 디스패치 해봅시다.
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '와우' }));

window.store = store; //윈도우의 console에서 store사용 가능
//윈도우의 콘솔에서 
//store.dispatch({type:'INCREASE'}); 
//store.dispatch({type:'DECREASE'}); 
//store.dispatch({type:'CHANGE_TEXT', text:'헤이헤이'}); 
//store.dispatch({type:'ADD_TO_LIST', item:{id:2, text:'우와'}}); 
window.unsubscribe = unsubscribe;