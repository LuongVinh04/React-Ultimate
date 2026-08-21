import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import User from "./component/User/User";
import Admin from "./component/Admin/Admin";
import HomePage from "./component/Home/HomePage";
import ManageUser from "./component/Admin/Content/ManageUser";
import DashBoard from "./component/Admin/Content/DashBoard";
import Login from "./component/Auth/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = (props) => {
  return (
    <>
      {" "}
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />}></Route>
          <Route path="users" element={<User />}></Route>
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<DashBoard />}></Route>
          <Route path="manage-user" element={<ManageUser />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Layout;
