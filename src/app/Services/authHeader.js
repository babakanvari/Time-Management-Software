export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        return { 'x-access-token': user.accessToken };
    } else {
        return {};
    }
}

export const userId = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.id) {
        return (user.id);
    } else {
        return {};
    }
}