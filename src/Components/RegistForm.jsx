import React, {FC, useContext, useState} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";


const RegistForm: FC = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {store} = useContext(Context);
    return(

        <div>

            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="text"
                placeholder='Password'
            />

            <button onClick={()=>store.registration(email, password)}>Registration</button>
        </div>
    )
}

export default observer(RegistForm);