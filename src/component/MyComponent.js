//class component
//function component

import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";
class MyComponent extends React.Component {
  
  //jsx
  render() {
    const myInfor = ['Luong Vinh', '20', 'Ha Noi'];
    return (
      <div>
       

        <UserInfo></UserInfo>
        <br></br>
        <DisplayInfo name ="Luong vinh" age = {26} myInfor = {myInfor}></DisplayInfo>
      </div>
    );
  }
}
export default MyComponent;
