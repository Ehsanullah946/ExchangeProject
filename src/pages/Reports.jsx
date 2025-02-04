import { Outlet } from "react-router-dom"
import Header from "../component/Header"
import ReportNav from "../component/Reports/ReportNav"
function Reports() {
    return (
        <div>
            <Header/>
            <ReportNav/>
            <Outlet/>
        </div>
    )
}

export default Reports
