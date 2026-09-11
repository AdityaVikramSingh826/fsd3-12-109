import { EventEmitter } from "node:events";
const login = (username) => {
    console.log(`${username} has logged in`);
};

const start = () => {
    console.log('system starts');
};

const working = (username) => {
    console.log(`${username} add items to cart`);
};

const logout = (username) => {
    console.log(`${username} has logged out`);
};



const task = new EventEmitter();
task.on("greet", login);
task.on("greet", start);
task.on("greet", working);
    task.on("greet", logout);

    task.once ("exit",() => {
      console.log("system shutting down");
    });


task.emit("greet", "Aditya Vikram Singh");
task.off("greet", working);
task.emit("greet", "Pandit JI");
task.emit("exit");