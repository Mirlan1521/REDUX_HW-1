import React from 'react';
import {useSelector} from "react-redux";

const Users = () => {
    const users = useSelector(state => state.users)
    return (
    <ul>
        {users.map((user, key) => <li key={key}>{user}</li>)}
    </ul>
);
};



export default Users;