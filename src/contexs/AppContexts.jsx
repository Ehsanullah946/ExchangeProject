import { useContext, useState } from "react";
import { createContext } from "react";
 const AppContexts =createContext();
 function AppProvider({children}){  
     const [customer,setCustomer]=useState([]);
     const [branch,setBranch]=useState([]);
     const [employee,setEmployee]=useState([]);
     const [owner, setOwner]=useState([]);
     const [receiver,setReceiver]=useState([]);
     const [guarantor,setGuarantor]=useState([]);
     const [changer,setChanger]=useState([]);
     const [createUser,setCreateUser]=useState([]);
     const [deposit,setDeposit]=useState([]);
     const [withDrow,setWithDrow]=useState([]);
     const [accountToAccount,setAccountToAccount]=useState([]);
     const [sendMoney,setSendMoney]=useState([]);
     const [receiveMoney,setReceiveMoney]=useState([]);
     const [exchangeMoney,setExchangeMoney]=useState([]);
     const [expence,setExpence]=useState([]);
     const [dayBook,setDayBook]=useState([]);
     const [rate,setRate]=useState([]);
     

     const [isOpen, setIsOpen] = useState(false);  
     const [isActive, setIsActive] = useState(false);

    
 // try {
 //     const response=await fetch('.api/customer',
 //          {method:"POST",
 //          headers:{'Content-type':'application/json'},
 //          body:JSON.stringify(CustomerData),
 //        })
 //         const newCustomer=await response.json();
 // setCustomer(prevCustomer=>[...prevCustomer,customer]);
 //       } catch (error) {
 //         console.error("Error addding customer");
 //       }

     const addCustomer=(customer)=> {
       setCustomer(prevCustomer=>[...prevCustomer,customer]);
      }
     const addBranch=(branch)=>{
        setBranch((prevBranch)=>[...prevBranch, branch]);
     }  
     const addEmployee=(employee)=>{
      setEmployee((prevEmployee)=>[...prevEmployee,employee]);
     } 

     const addOwner=(owner)=>{
      setOwner(preOwner=> [...preOwner,owner]);
     }

     const addReceiver=(receiver)=>{
      setReceiver(prevReciver=>[...prevReciver,receiver])
     }

     const addGuarantor=(guarantor)=>{
      setGuarantor(preGuarantor=> [...preGuarantor,guarantor])
     }
     const addChanger=(changer)=>{
      setChanger(prevChanger=> [...prevChanger,changer])
     }

     const addCreateUser=(createUser)=>{
       setCreateUser(prevCreateUser=>[...prevCreateUser,createUser])
     }
     const DepositMoney=(deposit)=>{
       setDeposit(prevDeposit=>[...prevDeposit,deposit]);
     }

     const withDrowMoney=(withDrow)=>{
      setWithDrow(prevWithDrow=>[...prevWithDrow,withDrow]);

     }
     const accountToAccountMoney=(accountToAccount)=>{
      setAccountToAccount(prevAccountToAccount=> [...prevAccountToAccount,accountToAccount])
     }
    
     const addSendMoney=(sendMoney)=>{
      setSendMoney(prevSendMoney=> [...prevSendMoney,sendMoney])
     }

     const addReceiveMoney=(receiveMoney)=> { 
      setReceiveMoney(prevReceiveMoney=>[...prevReceiveMoney,receiveMoney])
     }

     const addExchangeMoney=(exchangeMoney)=>{
        setExchangeMoney(prevExchangeMoney=> [...prevExchangeMoney,exchangeMoney]);
     }

    const addExpence=(expence)=>{
      setExpence(prevExpence=>[...prevExpence,expence])
    }


    const addDayBook=(dayBook)=>{
      setDayBook(prevDaybook=> [...prevDaybook,dayBook])
    }

    const addRate=(rate)=>{
      setRate(prevRate=>[...prevRate,rate]);
    }
    // const updateItem = (updatedItem, type) => {
    //   const setItems = type === 'customer' ? setCustomer : setBranch;
    //   const prevItems = type === 'customer' ? customer : branch;
    //   setItems(prevItems => {
    //     const itemExists = prevItems.some(item => item.id === updatedItem.id);
    //     if (itemExists) {
    //       return prevItems.map(item => 
    //         item.id === updatedItem.id ? updatedItem : item
    //       );
    //     } else {
    //       return [...prevItems, updatedItem];
    //     }
    //   });
    // };
    const updateItem = (updatedItem, type) => {
      const stateMap = {
        customer: { items: customer, setItems: setCustomer },
        branch: { items: branch, setItems: setBranch },
        employee: { items: employee, setItems: setEmployee },
        owner: { items: owner, setItems: setOwner },
        receiver:{items:receiver,setItems:setReceiver},
        guarantor:{items:guarantor,setItems:setGuarantor},
        changer:{items:changer,setItems:setChanger},
        createUser:{items:createUser,setItems:setCreateUser},
        deposit:{items:deposit,setItems:setDeposit},
        withDrow:{items:withDrow,setItems:setWithDrow},
        accountToAccount:{items:accountToAccount,setItems:setAccountToAccount},
        sendMoney:{items:sendMoney,setItems:setSendMoney},
        receiveMoney:{items:receiveMoney,setItems:setReceiveMoney},
        exchangeMoney:{items:exchangeMoney,setItems:setExchangeMoney},
        expence:{items:expence,setItems:setExpence},
        dayBook:{item:dayBook,setItems:setDayBook},
        rate:{item:rate,setItems:setRate}
      };
      
      const { items,setItems} = stateMap[type];
      setItems(prevItems => {
        const itemExists = prevItems.some(item => item.id === updatedItem.id);
        if (itemExists) {
          return prevItems.map(item =>
            item.id === updatedItem.id ? updatedItem : item
          );
        } else {
          return [...prevItems, updatedItem];
        }
      });
    };

    const updateBranch = (updatedBranch) => updateItem(updatedBranch, "branch");
     const updateCustomer = (updatedCustomer) => updateItem(updatedCustomer, "customer");
     const updateEmployee = (updateEmployee) => updateItem(updateEmployee, "employee");
     const updateOwner = (updateOwner) => updateItem(updateOwner, "owner");
     const updateReceiver = (updateReceiver) => updateItem(updateReceiver, "receiver");
     const updateGuarantor = (updateGuarantor) => updateItem(updateGuarantor, "guarantor");
     const updateChanger = (updateChanger) => updateItem(updateChanger, "changer");
     const updateCreateUser = (updateCreateUser) => updateItem(updateCreateUser, "createUser");
     const updateDeposit = (updateDeposit) => updateItem(updateDeposit, "deposit");
     const updateWithDrow = (updateWithDrow) => updateItem(updateWithDrow, "withDrow");
     const updateAccountToAccount=(updateAccountToAccount)=> updateItem(updateAccountToAccount,"accountToAccount");
     const updateSendMoney=(updateSendMoney)=>updateItem(updateSendMoney,"sendMoney");
     const updateReceiveMoney=(updateReceiveMoney)=>updateItem(updateReceiveMoney,"receiveMoney")
     const updateExchangeMoney=(updateExchangeMoney)=>updateItem(updateExchangeMoney,"exchangeMoney")
     const updateExpence=(updateExpence)=> updateItem(updateExpence,"expence");
     const updateDayBook=(updateDayBook)=> updateItem(updateDayBook,"dayBook");
     const updateRate=(updateRate)=> updateItem(updateRate,"rate");
    
                           
     return (
        <AppContexts.Provider value={{
        customer,addCustomer,branch,
        addBranch,isOpen,
        setIsActive,setIsOpen,isActive,addEmployee,
        employee,updateEmployee,updateBranch,updateCustomer,
        addOwner,owner,updateOwner,receiver,updateReceiver,addReceiver,
        addGuarantor,updateGuarantor,guarantor,addChanger,changer,updateChanger,
        addCreateUser,updateCreateUser,createUser,DepositMoney,updateDeposit,deposit,
        withDrow,updateWithDrow,withDrowMoney,updateAccountToAccount,
        accountToAccount,accountToAccountMoney,sendMoney,addSendMoney,updateSendMoney,
        receiveMoney,updateReceiveMoney,addReceiveMoney,updateExchangeMoney,exchangeMoney,addExchangeMoney,
        updateExpence,expence,addExpence,
        updateDayBook,dayBook,addDayBook,updateRate,addRate,rate
        }}>
          {children} 
        </AppContexts.Provider> 
     )   
}
function useContexts(){
    const context=useContext(AppContexts);
    if(context===undefined){
      throw new Error("data used outside the app provider");
    }
    return context;
 }
export { AppProvider,useContexts} 

