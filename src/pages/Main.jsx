import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import MainNav from "../component/Main/MainNav";

function Main() {
    return (
        <div>
            <Header />
            <div>
            <MainNav />
            <Outlet />
            </div>
        </div>
    );
}

export default Main;
