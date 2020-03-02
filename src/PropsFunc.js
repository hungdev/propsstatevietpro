import React, { Component } from 'react'


class Con extends Component {
  render() {
    return (
      <div>
        <div>{this.props.abc}</div>
        <div onClick={() => this.props.onChangeName('Aaaaa')}>click</div>
      </div>
    )
  }
}


export default class Cha extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'cccc'
    }
  }

  render() {
    return (
      <div>
        <div>hello: {this.state.name}</div>
        <Con
          abc={'kkk'}
          onChangeName={(value) => this.setState({ name: value })}
        />
      </div>
    )
  }
}

/**
 * truyền từ con sang cha
 * b1: viết props component con: this.props.tenPropsFunction(gia tri can truyen vao)
 * b2: định nghĩa tenPropsFunction ở component con dòng 30, truyền vào là 1 function với
 * giá trị là giá trị bên component con
 *
 */