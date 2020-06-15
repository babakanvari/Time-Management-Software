import axios from "axios";

const url = process.env.NODE_ENV == 'production' ? '' : 'http://localhost:7777/user/login';

export const login = async ({ email, password }) => {
    if (email && password) {
        let response = await axios.post(url, { email, password });
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log(response.data);
    }
    else {
        alert('All fields should be field');
    }
}

export const logout = () => {
    alert('Successfully loged out');
    localStorage.removeItem("user");
}

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}