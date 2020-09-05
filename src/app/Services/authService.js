import axios from "axios";

const url = process.env.NODE_ENV == 'production' ? '' : 'http://localhost:7777/user/login';

export const login = async ({ email, password }) => {
    if (email && password) {
        let response = await axios.post(url, { email, password });
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
            return JSON.parse(localStorage.getItem('user'));
        }
        else {
            alert('Username or password is not correct');
            return ('');
        }
    }
    else {
        alert('All fields should be filled');
        return ('');
    }
}

export const logout = () => {
    localStorage.removeItem("user");
}

export const getCurrentUser = () => {
    let user = JSON.parse(localStorage.getItem('user'));
    return user ? user : '';
}