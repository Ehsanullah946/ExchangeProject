import { useContext, useState } from "react";
import { createContext } from "react";

 const AppContexts =createContext();
 function AppProvider({children}){  
     const [customer,setCustomer]=useState([]);
     const [branch,setBranch]=useState([]);
     
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
     const addBranch=(branch)=>{
        setBranch((prevBranch)=>[...prevBranch, branch]);
     }
     
     
     return (
        <AppContexts.Provider value={{customer,addCustomer,branch,addBranch}}>
            {children}
        </AppContexts.Provider>
     )
    
}

function useContexts(){
    const context=useContext(AppContexts);
    if(context===undefined){
      throw new Error("Cities used outside the cities provider ");
    }
    return context;
 }

export { AppProvider,useContexts} 
