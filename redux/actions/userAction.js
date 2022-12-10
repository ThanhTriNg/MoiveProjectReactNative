export const CREATE_USER = 'CREATE_USER';
export const VIEWALL_USER = 'VIEWALL_USER';
export const CHECK_USER = 'CHECK_USER';


export const createUser = (user) => {
    return {
        type: CREATE_USER,
        payload: {
            username: user.username,
            password: user.password
        }
    };
}


export const viewAllUser = (users) => {
    return {
        type: VIEWALL_USER,
        payload: users
    };
}

export const checkUser = (user) => {
    return {
        type: CHECK_USER,
        payload: {
            username: user.username,
            password: user.password
        }
    };
}
