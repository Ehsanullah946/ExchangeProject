import { useContext, useState } from "react";
import { createContext } from "react";

 const CustomerContext =createContext();
 function CustomerProvider({children}){
    const [customer,setCustomer]=useState([]);
     const addCustomer=(customer)=> {
        // try {
        //     const response=await fetch('.api/customer',
        //          {method:"POST",
        //          headers:{'Content-type':'application/json'},
        //          body:JSON.stringify(CustomerData),
        //         })
        //         const newCustomer=await response.json();
        // setCustomer(prevCustomer=>[...prevCustomer,customer]);
        //     } catch (error) {
        //         console.error("Error addding customer");
        //     }
     
            setCustomer(prevCustomer=>[...prevCustomer,customer]);
     }
     return (
        <CustomerContext.Provider value={{customer,addCustomer}}>
            {children}
        </CustomerContext.Provider>
     )
    
}

function useCustomer(){
    const context=useContext(CustomerContext);
    if(context===undefined){
      throw new Error("Cities used outside the cities provider ");
    }
    return context;
 }

export { CustomerProvider,useCustomer} 
