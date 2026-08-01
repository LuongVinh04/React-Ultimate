//class component
//function component

import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      {id: 1, name : 'Luong Vinh', age: 20, address: 'Ha Noi'},
      {id: 2, name : 'Thien Mom', age: 20, address: 'Bac Giang'},
      {id: 3, name : 'Luong Giang', age: 20, address: 'Ha Giang'},
    ]
  }
  
  //jsx
  render() {
    return (
      <div>
       

        <UserInfo></UserInfo>
        <br></br>
        <DisplayInfo listUsers={this.state.listUsers}></DisplayInfo>
      </div>
    );
  }
}
export default MyComponent;
