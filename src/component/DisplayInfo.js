import React, { useState } from "react";
import UserInfo from "./AddUser";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";

//stateless vs stateful
// class DisplayInfo extends React.Component {
//   render() {
//     console.log("call render");
//     //destructuring array/object
//     const { listUsers } = this.props;
//     //props => viet tat properties (dung de truyen du lieu tu component cha sang component con)

//     //template + logic js
//     return (
//       <div className="display-info-container">
//         {true && (
//           <div>
//             {listUsers.map((user) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>My name is {user.name}</div>
//                   <div>My age is {user.age}</div>
//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(user.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfo = (props) => {
  const { listUsers } = props; //object

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  //destructuring array/object

  //props => viet tat properties (dung de truyen du lieu tu component cha sang component con)

  //template + logic js
  return (
    <div className="display-info-container">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide list users" : "Show list users"}
        </span>
      </div>
      {isShowHideListUser && (
        <div>
          {listUsers.map((user, index) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>My name is {user.name}</div>
                <div>My age is {user.age}</div>
                <div>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DisplayInfo;
