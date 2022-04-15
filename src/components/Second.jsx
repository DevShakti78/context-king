
import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import {RegistrationContext} from "../context/RegistrationContext"
export const Second = ()=>{
    const {name, age, date_of_birth ,state_of_residence,address,pin_code, dispatch} = React.useContext(RegistrationContext)
    const navigate= useNavigate();
    const btnHandle=()=>{
        if(state_of_residence.length>=2&&address.length>=2&&pin_code.length>=2){
            axios.post("http://localhost:8080/users",{
                name:name,
                age:age,
                date_of_birth:date_of_birth,
                state_of_residence:state_of_residence,
                address:address,
                pin_code:pin_code
     
            })
            alert("Data Stored Succefully");
            navigate("/users")
         }
         else{
             alert("FILL ALL DETAILS")
            
         }

        }
       
      
    console.log(state_of_residence,address,pin_code)

    return (
        <div className="box">
            <label>STATE OF RESIDENCE</label>
            <input onChange={(e)=>{dispatch({type:"CHANGE_STATE", payload:e.target.value})}} type="text"  id="state_of_residence" placeholder="State Of Residence" />
            <label>ADDRESS</label>
            <input onChange={(e)=>{dispatch({type:"CHANGE_ADDRESS", payload:e.target.value})}} type="text" id="address" placeholder="Address" />
            <label>PIN CODE</label>
            <input onChange={(e)=>{dispatch({type:"CHANGE_PIN", payload:e.target.value})}} type="text" id="pin_code"  placeholder="Pin Code" />
            <button className="btn" onClick={()=>{btnHandle()}}>SUBMIT</button>
        </div>
    )
}