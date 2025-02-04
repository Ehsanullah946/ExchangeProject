import { Outlet } from "react-router-dom"
import Header from "../component/Header"
import BankNav from "../component/Bank/BankNav"
function Bank() {
    return (
        <div>
            <Header/>
            <BankNav/>
            <Outlet/>
        </div>
    )
}

export default Bank
