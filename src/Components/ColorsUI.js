import React, { Component } from "react";

class ColorsUI extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { colors } = this.props;
    return (
      <>
        {colors.map((m, idx) => {
          return (
            <div className="box-color" key={idx} style={{ backgroundColor: m }}>
              {m}
            </div>
          );
        })}
      </>
    );
  }
}
export default ColorsUI;
