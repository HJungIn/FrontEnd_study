import React, { Component } from 'react';

class CounterClassComponent extends Component {

// 우리가 만든 메서드들을 각 button 들의 이벤트로 등록하게 되는 과정에서 각 메서드와 컴포넌트 인스턴스의 관계가 끊겨버리기 때문에 이게 필요
     
// state = {  //바벨 플러그인을 사용한 것으로 생성자에 쓰지 않고 바로 사용가능하다. 
//     counter:0
// };

    constructor(props) { 
        super(props);

        this.state = { //state는 무조건 객체 형태여야 한다!!!
            counter:0,
            fixed:1,
            updateMe:{ //객체는 불변성 유지 해줘야 한다.
                toggleMe: false,
                dontChangeMe: 1
            }
        };




        //1번 방법 : 클래스의 생성자 메서드 constructor 에서 bind 작업   
        // this.handleIncrease = this.handleIncrease.bind(this);
        // this.handleDecrease = this.handleDecrease.bind(this);
    }


    //2번 방법 : 화살표 함수 사용
    handleIncrease = () => {

        this.setState(state => ({ //이건 여러개면 그 갯수만큼 counter의 숫자가 줄어든다. 
            counter: state.counter+1
        }));

        this.setState({ // 이건 여러개 여도 1번만 실행되는것처럼 보인다.
            counter: this.state.counter+1
        });
        console.log('increase');
    }
    handleDecrease = () => {
        this.setState({
            counter: this.state.counter-1
        });
        console.log('decrease');
    }

    handleToggle = () => {
        this.setState({
            updateMe:{ //updateMe안에있는건 불변성을 유지해줘야한다.
                ...this.state.updateMe,
                toggleMe: !this.state.updateMe.toggleMe
            }
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button> 
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}

export default CounterClassComponent;