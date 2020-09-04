import axios from "axios";

const url = process.env.NODE_ENV == 'production' ? '' : 'http://localhost:7777/user/login';

export const login = async ({ email, password }) => {
    if (email && password) {
        let response = await axios.post(url, { email, password });
        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
            alert('You Have Successfully Logged in');
        }
        console.log(response.data);
    }
    else {
        alert('All fields should be filled');
    }
}

export const logout = () => {
    alert('You Have Successfully Logged Out');
    localStorage.removeItem("user");
}

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}