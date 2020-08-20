// write your CatList component here
import React, { Component } from "react";

class CatList extends Component {
  render() {
    console.log(this.props.catPics);
    const catPics = this.props.catPics.map((image, index) => (
      <img key={index} src={image.url} alt=""></img>
    ));

    return <div>{catPics}</div>;
  }
}
export default CatList;
