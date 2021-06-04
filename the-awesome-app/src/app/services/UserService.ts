export abstract class UserService{

    abstract ValidateUser(name: string, password: string): any;
    abstract IsAuthenticated(): boolean;
}