import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import UserTable from "../Dashboard/UserTable";
import AgentTable from "../Dashboard/AgentTable";
import Addmoney from "../forms/Addmoney/Addmoney";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "userTable",
        element: <UserTable></UserTable>
      },
      {
        path: "agentTable",
        element: <AgentTable></AgentTable>
      },
      {
        path: "addMoney",
        element: <Addmoney></Addmoney>
      }
    ]
  },
]);

export default router;
