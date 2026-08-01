import React from "react";
import UserInfo from "./UserInfo";

class DisplayInfo extends React.Component {
  render() {
    console.log(this.props);
    //destructuring array/object
    const { age, name } = this.props;
    //props => viet tat properties (dung de truyen du lieu tu component cha sang component con)
    return (
      <div>
        <div>My name is {name}</div>
        <div>My age is {age}</div>
      </div>
    );
  }
}

export default DisplayInfo;
