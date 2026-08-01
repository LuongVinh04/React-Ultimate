import React from "react";
import UserInfo from "./UserInfo";

class DisplayInfo extends React.Component {
  render() {
    console.log(this.props);
    //destructuring array/object
    const { listUsers } = this.props;
    console.log(listUsers);
    //props => viet tat properties (dung de truyen du lieu tu component cha sang component con)
    return (
      <div>
        {listUsers.map((user) => {
          console.log("check user: ", user);
          return (
            <div key={user.id}>
              <div>My name is {user.name}</div>
              <div>My age is {user.age}</div>
            </div>
          );
        })}
        {/* <div>My name is {name}</div>
        <div>My age is {age}</div>
        <hr></hr>
        <div>My name is {name}</div>
        <div>My age is {age}</div>
        <hr></hr>
        <div>My name is {name}</div>
        <div>My age is {age}</div> */}
      </div>
    );
  }
}

export default DisplayInfo;
