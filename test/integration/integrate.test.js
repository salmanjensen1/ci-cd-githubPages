// user.test.js

const { addUser, getUser, deleteUser } = require('../../src/integrate');

describe('User Management', () => {
  beforeEach(() => {
    // Reset users before each test
    users = [];
  });

  test('getUser function retrieves a user by username', () => {
    const user = { username: 'testUser', email: 'test@example.com' };
    addUser(user);
    const retrievedUser = getUser('testUser');
    expect(retrievedUser).toEqual(user);
  });

  test('deleteUser function deletes a user', () => {
    const user = { username: 'testUser', email: 'test@example.com' };
    addUser(user);
    deleteUser('testUser');
    expect(users).not.toContainEqual(user);
  });
});
