// user.js

let users = [];

function addUser(user) {
  users.push(user);
}

function getUser(username) {
  return users.find(user => user.username === username);
}

function deleteUser(username) {
  users = users.filter(user => user.username !== username);
}

module.exports = {
    addUser,
    getUser,
    deleteUser
  };