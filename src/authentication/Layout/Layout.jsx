import Navbar from '../NavBar/NavBar';
import HomeNav from '../../components/HomeNav/HomeNav';
// import Home from '../../components/Home/Home';
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <HomeNav></HomeNav>
      <Outlet />
    </div>
  );
}

