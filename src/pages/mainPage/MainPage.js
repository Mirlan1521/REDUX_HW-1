import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const MainPage = () => {
    const title = useSelector(state => state.title);

    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch({type:"INPUT_TEXT",
        payload: e.target.value})
    }
    return (
        <div>
            MainPage -{title}

            <input type="text" onChange={onChange}/>
        </div>
    );
};

export default MainPage;