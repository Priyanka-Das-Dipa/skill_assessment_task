import { useContext } from "react";
import { AuthContextInfo } from "../provider/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(AuthContextInfo);
  const { axiosPublic } = useAxiosPublic();

  const { data } = useQuery({
    queryKey: ["getUser", user?.email],
    queryFn: () => {
      return axiosPublic.get(`/getUser`, user?.email);
    },
  });
  console.log(data);

  return (
    <div className="flex gap-3">
      <div className="w-64 min-h-screen bg-slate-300">
        <ul className="menu p-4 text-black text-xl space-y-2">
          <li>
            <NavLink to="/dashboard/userTable">Users Table</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/agentTable">Agent Table</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addMoney">Add Money</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/sendMoney">Send Money</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
