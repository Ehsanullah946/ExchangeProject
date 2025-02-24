import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Main from "./pages/Main"
import Management from "./pages/Management"
import Reports from "./pages/Reports"
import Bank from "./pages/Bank"
import Dashboard from "./component/Main/Dashboard";
import AddMoney from "./component/Main/AddMoney";
import WithDrow from "./component/Main/WithDrow";
import AcountToAcount from "./component/Main/AcountToAcount";
import SendMoney from "./component/Main/SendMoney";
import ReciveMoney from "./component/Main/ReciveMoney";
import ExchangeMoney from "./component/Main/ExchangeMoney";
import Consumptions from "./component/Main/Consumptions";
import DayBook from "./component/Main/DayBook";
import Rate from "./component/Main/Rate";
import Acounts from "./component/Main/Acounts";
import AfghanBankDeposit from "./component/Bank/AfghanBankDeposit";
import AfghanBankWithdrow from "./component/Bank/AfghanBankWithdrow";
import ForeignBankDeposit from "./component/Bank/ForeignBankDeposit";
import ForeignBankWithdrow from "./component/Bank/ForeignBankWithdrow";
import Owner from "./component/Management/Owner";
import Employee from "./component/Management/Employee";
import Customer from "./component/Management/Customer";
import SenderReceiver from "./component/Management/SenderReceiver";
import Guarantor from "./component/Management/Guarantor";
import CreateUser from "./component/Management/CreateUser";
import Branch from "./component/Management/Branch";
import Setting from "./pages/Setting";
import Exchanger from "./component/Management/Exchanger";
import ProfetReport from "./component/Reports/ProfetReport";
import DepositReport from "./component/Reports/DepositReport";
import WithdrowReport from "./component/Reports/WithdrowReport";
import SendingReport from "./component/Reports/SendingReport";
import RecievingReport from "./component/Reports/RecievingReport";
import ExpenceReport from "./component/Reports/ExpenceReport";
import SellingReport from "./component/Reports/SellingReport";
import PurchaseReport from "./component/Reports/PurchaseReport";
import WealthReport from "./component/Reports/WealthReport";
import CustomerReport from "./component/Reports/CustomerReport";
import GuarantorReport from "./component/Reports/GuarantorReport";
import BankReport from "./component/Reports/BankReport";
import DaybookReport from "./component/Reports/DaybookReport";
import WalletReport from "./component/Reports/WalletReport";
import RatesReport from "./component/Reports/RatesReport";
import {CustomerProvider} from "./contexs/CustomerContex";
function App() {
  return <div>
       <CustomerProvider>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/main" element={<Main/>}>
         <Route index element={<Navigate replace to="dashboard"/>} />
         <Route path="dashboard" element={<Dashboard/>}/>
         <Route path="deposit" element={<AddMoney/>}/>
         <Route path="withdrow" element={<WithDrow/>}/>
         <Route path="accountToAccount" element={<AcountToAcount/>}/>
         <Route path="sendMoney" element={<SendMoney/>}/>
         <Route path="reciveMoney" element={<ReciveMoney/>}/>
         <Route path="exchange" element={<ExchangeMoney/>}/>
         <Route path="consumption" element={<Consumptions/>}/>
         <Route path="dayBook" element={<DayBook/>}/>
         <Route path="rate" element={<Rate/>}/>
         <Route path="acount" element={<Acounts/>}/>
         </Route>
        <Route path="/bank" element={<Bank/>}>
        <Route index element={<Navigate replace to="ABDeposit"/>} />
         <Route path="ABDeposit" element={<AfghanBankDeposit/>}/>
         <Route path="ABWithdrow" element={<AfghanBankWithdrow/>}/>
         <Route path="FBDeposit" element={<ForeignBankDeposit/>}/>
         <Route path="FBWithdrow" element={<ForeignBankWithdrow/>}/>
        </Route>
        <Route path="/management" element={<Management/>}>
         <Route index element={<Navigate replace to="owner"/>} />
         <Route path="owner" element={<Owner/>}/>
         <Route path="employee" element={<Employee/>}/>
         <Route path="customer" element={<Customer/>}/>
         <Route path="SR" element={<SenderReceiver/>}/>
         <Route path="guarantor" element={<Guarantor/>}/>
         <Route path="exchanger" element={<Exchanger/>}/>
         <Route path="createUser" element={<CreateUser/>}/>
         <Route path="branch" element={<Branch/>}/>
        </Route>
        <Route path="/reports" element={<Reports/>}>
        <Route index element={<Navigate replace to="profetReport"/>} />
         <Route path="profetReport" element={<ProfetReport/>}/>
         <Route path="depositReport" element={<DepositReport/>}/>
         <Route path="withdrowReport" element={<WithdrowReport/>}/>
         <Route path="sendingReport" element={<SendingReport/>}/>
         <Route path="receivingReport" element={<RecievingReport/>}/>
         <Route path="expenceReport" element={<ExpenceReport/>}/>
         <Route path="sellingReport" element={<SellingReport/>}/>
         <Route path="purchaseReport" element={<PurchaseReport/>}/>
         <Route path="wealthReport" element={<WealthReport/>}/>
         <Route path="costomerReport" element={<CustomerReport/>}/>
         <Route path="guarantorReport" element={<GuarantorReport/>}/>
         <Route path="bankReport" element={<BankReport/>}/>
         <Route path="daybookReport" element={<DaybookReport/>}/>
         <Route path="walletReport" element={<WalletReport/>}/>
         <Route path="rateReport" element={<RatesReport/>}/>
        </Route>
        <Route path="/setting" element={<Setting/>}/>
      </Routes>
  </BrowserRouter>
    </CustomerProvider>
  </div>  
}
export default App;
