import { Outlet } from "react-router-dom";
import Header from "../component/Header";
import MainNav from "../component/Main/MainNav";

function Main() {
    return (
        <div>
            <Header />
            <MainNav />
            <Outlet />
        </div>
    );
}

export default Main;
