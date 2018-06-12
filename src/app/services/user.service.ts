let User: any = {
    loginResult: true,
    userId: '',
    userType: '',
}

export class UserService{
    constructor(){}

    setUser(_user: any){
        User = _user;
    }

    getUser(): any{
        return User;
    }

    setUserId(_userId : any){
        User.userId = _userId;
    }

    setUserType(_userType : any){
        User.userType = _userType;
    }

}