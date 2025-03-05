import { useContext, useState } from "react";
import { createContext } from "react";

 const AppContexts =createContext();
 function AppProvider({children}){  
     const [customer,setCustomer]=useState([]);
     const [branch,setBranch]=useState([]);
     const [employee,setEmployee]=useState([]);
     const [owner, setOwner]=useState([]);
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
      };
    
      const { items, setItems } = stateMap[type];
    
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
                           
     return (
        <AppContexts.Provider value={{
        customer,addCustomer,branch,
        addBranch,isOpen,
        setIsActive,setIsOpen,isActive,addEmployee,
        employee,updateEmployee,updateBranch,updateCustomer,
        addOwner,owner
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

