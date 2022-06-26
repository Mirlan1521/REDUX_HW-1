


export const reducer =(state = {users: []},action)=>{
    if(action.type === "CHANGE_TITLE"){
        return{
            ...state, title:"I am new title"
        }
    }

    else if(action.type === "CLEAR_TITLE"){
        return{
            ...state, title:""
        }

    }
    else if (action.type==="INPUT_TEXT"){
        return {
            ...state, title: action.payload
        }
    }
    else if (action.type === "CREATE_USER"){
        return {
            ...state, users: [...state.users, action.payload]
        }
    }
    else {
        return state


    }
}