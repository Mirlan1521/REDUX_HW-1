import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import Users from "../../components/users/Users";




const UsersPage = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name:""
    })

    const onChangeName =(e)=>{
        setUser({name: e.target.value})
    }
    const createUser = () => {
       dispatch({type:"CREATE_USER", payload: +user.name + +10})
    }
    return (
        <div>

            Create number

            <input type="text" value={user.name} onChange={onChangeName}/>

            <button onClick={createUser}>create</button>

            <Users/>
        </div>
    );

};

export default UsersPage;