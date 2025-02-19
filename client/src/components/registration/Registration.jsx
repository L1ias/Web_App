import React, {useState} from 'react';
import './registration.css'
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";

const Registration = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    return (
        <div className="registration">
            <div className="registration_header">Регистрация</div>
            <Input value= {name} setValue = {setName} type="text" placeholder="Введите имя..."/>
            <Input value= {email} setValue = {setEmail} type="text" placeholder="Введите email..."/>
            <Input value= {password} setValue = {setPassword} type="password" placeholder="Введите пороль..."/>
            <button className="registration_btn" onClick={()=> registration (name,email,password)} >Зарегистрироваться</button>
        </div>
    );
};

export default Registration;