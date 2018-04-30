const COLORS: string[] = [
    'rgb(255, 191, 0, 0.1)',
    'rgb(255, 255, 0, 0.1)',
    'rgb(191, 255, 0, 0.1)',
    'rgb(0, 255, 0, 0.1)',
    'rgb(0, 255, 255, 0.1)',
    'rgb(0, 0, 255, 0.1)',
    'rgb(191, 0, 255, 0.1)',
    'rgb(255, 0, 191, 0.1)'
];

export class User{

    constructor(
        public name: string,
        public id: number,
        public color: string
    ){

    }
}

export class UserService{

    user: User;

    constructor(){
        this.generateUserId();
    }

    createUser(name: string){
        this.user = new User(name, this.generateUserId(), COLORS[Math.floor(Math.random() * COLORS.length)]);
    }

    private generateUserId(): number{
        let milliSeconds = (new Date).getTime();
        let randomNumber = Math.floor((Math.random() * 100000) + 1);
        return Math.floor((milliSeconds - randomNumber) / 2);
    }

    getUser(): User{
        return this.user;
    }

}