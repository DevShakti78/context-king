import React from "react";


const initState = {
    name:"",
    age:"",
    date_of_birth:"",
    state_of_residence:"",
    address:"",
    pin_code:"",
}

const reducer = (state, action)=>{
    switch(action.type){
        case "CHANGE_NAME":
            return {...state, name:action.payload};
        case "CHANGE_AGE":
            return {...state, age:action.payload};
        case "CHANGE_DOB":
            return {...state, date_of_birth:action.payload};
        case "CHANGE_STATE":
            return {...state, state_of_residence:action.payload};
        case "CHANGE_ADDRESS":
            return {...state, address:action.payload};
        case "CHANGE_PIN":
            return {...state, pin_code:action.payload};
        default:
             throw new Error();
    }
}

export const RegistrationContext = React.createContext();

export const RegistrationContextProvider = ({children})=>{
    const [state, dispatch] = React.useReducer(reducer, initState);
    const {name, age, date_of_birth, state_of_residence, address,pin_code } = state;

    return (
        <RegistrationContext.Provider value={{name, age, date_of_birth, state_of_residence,address,pin_code,dispatch}}>
            {children}
        </RegistrationContext.Provider>
    )
}