import { User } from '../models/user.js';

function find(filter) {
  return User.find(filter).exec();
}
function createUser(userDto) {
  return User.create(userDto);
}

export default { find, createUser };
