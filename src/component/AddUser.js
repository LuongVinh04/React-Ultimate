import React, { useState } from "react";

// class AddUser extends React.Component {
//   state = {
//     name: "",
//     address: "Ha Noi",
//     age: "",
//   };

//   handleOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//     console.log(event.target.value);
//   };

//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//     console.log(event.target.value);
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };
//   render() {
//     return (
//       <div>
//         Hello World My name is {this.state.name} and i'm {this.state.age}
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label>Your name:</label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnChangeInput(event)}
//           />
//           <button>Submit</button>

//           <label>Your age:</label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handleOnChangeAge(event)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUser = (props) => {
  //   state = {
  //     name: "",
  //     address: "Ha Noi",
  //     age: "",
  //   };
  const [name, setName] = useState("");
  const [address, setAddres] = useState("Ha Noi");
  const [age, setAge] = useState("");

  const handleOnChangeInput = (event) => {
    // this.setState({
    // name: event.target.value
    // });
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    //   this.setState({
    //     age: event.target.value,
    //   });
    //   console.log(event.target.value);
    // };
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      Hello World My name is {name} and i'm {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your name:</label>
        <input
          value={name}
          type="text"
          onChange={(event) => handleOnChangeInput(event)}
        />
        <button>Submit</button>

        <label>Your age:</label>
        <input
          value={age}
          type="text"
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
