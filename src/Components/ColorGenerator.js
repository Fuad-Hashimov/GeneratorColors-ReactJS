import React, { Component } from "react";
import ColorsUI from "./ColorsUI";
class ColorGenerator extends Component {
  genaratorColor = () => {
    const str = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return color;
  };

  colorsArr = () => {
    const arr = [];
    for (let i = 0; i < this.genaratorColor().length; i++) {
      arr.push(this.genaratorColor());
    }
    return arr;
  };
  render() {
    return (
      <div className="container">
        <div className="rows">
          <ColorsUI colors={this.colorsArr()} />
          <ColorsUI colors={this.colorsArr()} />
          <ColorsUI colors={this.colorsArr()} />
          <ColorsUI colors={this.colorsArr()} />
        </div>
      </div>
    );
  }
}
export default ColorGenerator;
