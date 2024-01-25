function createNewUser(user) {
    return {
        name: user.name,
        email: user.email,
        isActive: user.isActive
    };
}
createNewUser({
    name: "",
    email: "",
    isActive: false
});
