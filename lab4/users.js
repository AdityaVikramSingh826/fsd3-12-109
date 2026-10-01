// We use in memory database
let users = [
    {id:1, name: "Aditya Vikram singh",mob:'8004xxxxxx', email: "aditya@example.com"},
    {id:2, name: "Pandit Jii", mob:'8090xxxxxx', email: "pandit@example.com"}
];

let nextId = 3;

export const getAllUsers = () => {
    return users;
}

export const getUserById = (pid) => {
    const found = users.find((user) => user.id === pid)
    return found;
}

export const addUser = (user) => {
    user.id = nextId++;
    users.push(user);
    return user;
};

export const updateUser = (pid, updateData) => {
    const index = users.findIndex((user) => user.id === pid);
    if (index == -1) {
        return false;
    }
    updateData.id = pid;
    users[index] = updateData;
    return updateData;
}

export const deleteUser = (pid) => {
    const index = users.findIndex((user) => user.id === pid);
    if (index == -1) {
        return false;
    }
    users.splice(index, 1);
}
