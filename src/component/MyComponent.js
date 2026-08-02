//class component
//function component

import React from "react";
import AddUser from "./AddUser";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Luong Vinh", age: 20, address: "Ha Noi" },
      { id: 2, name: "Thien Mom", age: 18, address: "Bac Giang" },
      { id: 3, name: "Luong Giang", age: 30, address: "Ha Giang" },
    ],
  };

  handleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  handleDeleteUser = (userId) => {
    let listUserClone = [...this.state.listUsers];
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    this.setState({
      listUsers: listUserClone,
    });
  };

  //jsx
  render() {
    const test = "test";
    return (
      <>
        {test}
        <div className="a">
          <AddUser handleAddNewUser={this.handleAddNewUser}></AddUser>
          <br></br>
          <DisplayInfo
            listUsers={this.state.listUsers}
            handleDeleteUser={this.handleDeleteUser}
          ></DisplayInfo>
        </div>
        <div className="b"></div>
      </>
    );
  }
}
export default MyComponent;
