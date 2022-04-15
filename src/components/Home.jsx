import { useNavigate } from "react-router-dom"


export const Home = () =>{
    const navigate = useNavigate();
    return(
        <div className="box">
            <button className="btnhome" onClick={()=>{navigate('/registration/one')}}>Fill The Form</button>
            <button className="btnhome" onClick={()=>{navigate('/users')}}  >Users List</button>
        </div>
    )
}