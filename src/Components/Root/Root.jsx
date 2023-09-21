import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <div>
            <h1>Hello</h1>
            <div>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;