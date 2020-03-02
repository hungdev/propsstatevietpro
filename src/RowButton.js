import React, { Component } from 'react'

export default class RowButton extends Component {

  render() {
    return (
      <div>
        <div>{this.props.text}</div>
        <p id="slide-num" style={{ display: 'flex', flexDirection: 'row', cursor: 'pointer', }}>
          <div style={{ marginRight: 10 }}
            onClick={() => this.props.onPressButton('images/banner-1.jpg')}>1</div>
          <div style={{ marginRight: 10 }}
            onClick={() => this.props.onPressButton('images/banner-2.jpg')}>2</div>
          <div style={{ marginRight: 10 }}
            onClick={() => this.props.onPressButton('images/banner-3.jpg')}>3</div>
        </p>
      </div>
    )
  }
}
