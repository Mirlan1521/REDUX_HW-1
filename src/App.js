

import {useDispatch, useSelector} from "react-redux";
import UsersPage from "./pages/usersPage/UsersPage";


function App() {

    // const dispatch = useDispatch();
    //
    //
    // const renameTitle = (e)=>{
    //     e.preventDefault()
    //     dispatch({type:"CHANGE_TITLE"})
    // }
    //
    // const  clearTitle = (e) => {
    //     dispatch({type: "CLEAR_TITLE"})
    // }
  return (
    <div>

        <UsersPage/>

    </div>
  );
}

export default App;
