import React, { Component } from 'react'; //Component import 

class HelloClassComponent extends Component { // class 형

    //이렇게 static으로 디폴트 값 넣어도 됨
    // static defaultProps = {
    //     name: '이름없음'
    //   };

  render() { //render라는 method 필요
    const { color, name, isSpecial } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}

HelloClassComponent.defaultProps = {
  name: '이름없음'
};

export default HelloClassComponent;