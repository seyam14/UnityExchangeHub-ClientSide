import { Outlet } from "react-router-dom";
import Navbar from "../Sharedpage/Navbar/Navbar";
import Footer from "../Sharedpage/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;