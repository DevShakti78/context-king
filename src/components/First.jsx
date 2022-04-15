import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import {RegistrationContext} from "../context/RegistrationContext"

export const First = ()=>{
    const {name, age, date_of_birth, dispatch} = React.useContext(RegistrationContext)
    const navigate= useNavigate();
    const btnHandle=()=>{
        if(name.length>=3&&age.length>=2&&date_of_birth.length>=2){
            navigate('/registration/two')
        }
        else{
            alert("FILL ALL DETAILS")
        }
        
    }
    console.log(name, age, date_of_birth)
    return (
        <div className="box">
            <label htmlFor="">Full Name</label>
            <input onChange={(e)=>{dispatch({type:"CHANGE_NAME", payload:e.target.value})}}
            type="text" name="" id="name" placeholder="Your Full Name" />
            <label htmlFor="">Age</label>
            <input onChange={(e)=>{dispatch({type:"CHANGE_AGE", payload:e.target.value})}} type="text" name="" id="age" placeholder="Your Age"/>
            <label htmlFor="">Date of Birth</label>
            <input onChange={(e)=>{dispatch({type:"CHANGE_DOB", payload:e.target.value})}} type="date" name="" id="date_of_birth"  />
            <button className="btn" onClick={()=>{btnHandle()}}>NEXT</button>
           
        </div>
    )
}