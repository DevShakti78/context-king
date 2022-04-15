import axios from "axios";
import { useEffect, useState } from "react"
import { Userdata } from "./trdata";

export const USers=()=>{
    const [data,setdata]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8080/users").then((res)=>{
            setdata(res.data)
        })
    },[])
    return(
        <div className="box">
       <h2>Users List</h2>
       <button>HOME</button>
       <div className="userlist">
       <table>
           <thead>
               <tr>
                   <th>Sr.</th>
                   <th>NAME</th>
                   <th>AGE</th>
                   <th>DATE OF BIRTH</th>
                   <th>STATE</th>
                   <th>ADDRESS</th>
                   <th>PIN-CODE</th>
               </tr>
           </thead>
           <tbody>
               {data.map((e)=>(<Userdata data={e} key={e.id}/>))}
           </tbody>
       </table>
       </div>
        </div>
    )
}