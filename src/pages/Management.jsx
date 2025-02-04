import { Outlet } from "react-router-dom"
import Header from "../component/Header"
import ManagementNav from "../component/Management/ManagementNav"
function Management() {
    return (
        <div>
            <Header/>
            <ManagementNav/>
            <Outlet/>
        </div>
    )
}

export default Management
