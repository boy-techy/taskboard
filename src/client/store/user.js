import { observable, action } from 'mobx';

class User {
  @observable username = '';
  @observable passWord = false;

  @action
  setUsername = (value) => {
    console.log('jshdsjdsdsjdhsj');
    this.username = value;
  };

  @action
  setPassWord = (value) => {
    this.passWord = value;
  };

  isAutorised = () => {
    if (this.username === this.passWord) {
      return true;
    }
    return false;
  };
}

const user = new User();
export default user;

// class UserList {
//   @observable userList = [];
//   @computed
//   get AllUserist() {
//     return this.userList;
//   }
// }
