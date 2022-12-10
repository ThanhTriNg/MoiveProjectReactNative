import { CREATE_USER, VIEWALL_USER,CHECK_USER } from '../actions/userAction';
const initialState = {
    users: [

    ],
    currentUser: {},
    isLogin: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                users: [...state.users, { username: action.payload.username, password: action.payload.password }]
            };

        case VIEWALL_USER:
            console.log(action.payload)
            return {
                ...state,
                users: action.payload

            };
        case CHECK_USER:
            
            let temp = state.users.filter(
                (user)=>user.username == action.payload.username &&
                user.password == action.payload.password)
            console.log(temp.length)
            if (temp.length !== 0) {
                return {...state,isLogin:true}
            }
            return {
                ...state,
            };
        default:
            return { ...state };
    }
}

