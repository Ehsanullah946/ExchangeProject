import { Outlet } from "react-router-dom"
import Header from "../component/Header"
import SettingNav from "../component/Setting/SettingNav"

function Setting() {
    return (
        <div>
             <Header/>
             <SettingNav/>
             <Outlet/>
        </div>
    )
}

export default Setting
