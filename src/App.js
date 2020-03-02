import React, { Component } from 'react';
class Child extends Component {
  render() {
    return (
      <div>
        <span style={{ marginRight: 10 }}>hello</span>
        {/* <span>{this.props.nick}</span> */}
      </div>
    )
  }
}


export default class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'hehhe',
      dog: ['a', 'b'],
      cat: { a: 1, b: 2 },
      year: 10
    }
  }

  onChangeState() {
    this.setState({ name: 'Hello' })
  }

  render() {
    return (
      <div>
        <div>{this.state.name}</div>
        {/* <div onClick={() => this.onChangeState()}>thay doi state</div> */}
        <Child nick={'Ceeeeeee'} />
        {/* <div>{this.state.dog}</div>
        <div>{this.state.year}</div>
        <div>{this.state.cat.a}</div>
        <div>{this.state.cat.b}</div>
        <div>{this.state.dog[0]}</div> */}
      </div>
    );
  }
}

// khai bao state: được khai báo trong constructor this.state ={}
// cách dùng: gọi: this.state.bien
// thay doi state: this.setState({bien: giatri})
// một màn hình chỉ được render lại khi props hoặc state thay đổi

