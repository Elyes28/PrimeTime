import { createContext,useEffect, useState} from "react";
import axios from "axios";
const user={}
const UserContext=createContext({
    user: null,
    login:()=>{}
});
export const userContextProvider=({children})=>{
    const [user,setUser]=useState(null);
useEffect(() => {
    
    {console.log('provided'+localStorage.getItem('id'))}
}, [])
const getuser= async ()=>
{
    axios.get("http://localhost:5000/user/"+id).then( res =>
    setUser(res.data.result))
}
const login=()=>{
    console.log("aa")
}
const context={user,login}


return (
    <UserContext.Provider value={context}>
        {children}
    </UserContext.Provider>
)
}
export default UserContext