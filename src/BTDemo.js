import React, { Component } from 'react'
import RowBtn from './RowButton'
import banner1 from "./images/banner-1.jpg"
import banner2 from "./images/banner-2.jpg"
import banner3 from "./images/banner-3.jpg"

export default class BTDemo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      image: 'images/banner-1.jpg',
      name: 'aaaa'
    }
  }

  render() {
    return (
      <div id="slide">
        <div id="slide-img">
          <img
            alt='img-banner'
            src={this.state.image}
            style={{ height: 200, width: 200 }} />
        </div>
        <RowBtn
          text={this.state.name}
          onPressButton={
            (value) =>
              this.setState({ image: value })}
        />
      </div>
    )
  }
}
