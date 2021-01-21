import { Dispatch } from 'redux';
import { AsyncActionCreatorBuilder } from 'typesafe-actions';

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;
type AnyPromiseCreator = (...param: any[]) => Promise<any>;

//<A extends AnyAsyncActionCreator : 어떤 타입이든 될 수 있지만 AsyncActionCreator<any, any, any>;이 타입은 만족해야한다.
export default function createAsyncThunk<A extends AnyAsyncActionCreator, F extends AnyPromiseCreator>(
  asyncActionCreator: A, //A타입
  promiseCreator: F //F타입
) {
  type Params = Parameters<F>; // 함수의 파라미터들의 타입을 추론
  return function thunk(...params: Params) {
    return async (dispatch: Dispatch) => {
      const { request, success, failure } = asyncActionCreator;
      dispatch(request(undefined)); // 파라미터를 비우면 타입 에러가 나기 때문에 undefined 전달
      try {
        const result = await promiseCreator(...params);
        dispatch(success(result));
      } catch (e) {
        dispatch(failure(e));
      }
    };
  };
}

// 예시
// function sum(a:number, b:number, c:number){
//     return a+b;
// }
// type P =Parameters<typeof sum>; //P는 number의 배열이 된다.