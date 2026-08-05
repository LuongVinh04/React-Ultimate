import React, { useEffect, useState } from "react";
import UserInfo from "./AddUser";
import "./DisplayInfo.scss";
import logo from "./../logo.svg";

//stateless vs stateful

const DisplayInfo = (props) => {
  const { listUsers } = props; //object

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  useEffect(() => {
    if (listUsers.length === 0) {
      alert("abc");
    }
    setTimeout(() => {
      document.title = "LuongVinh";
    }, 3000);
    console.log("Call me render ");
  }, [listUsers]);
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
