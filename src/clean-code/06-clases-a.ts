(() => {

    // No aplicando el principio de responsablidad única

    type Gender = 'M'|'F';

    class Person {
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ){}
    }

    class User extends Person {
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string, 
            gender: Gender, 
            birthdate: Date
        ){
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        cheackCredentials(){
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string, 
            gender: Gender, 
            birthdate: Date
        ){
            super(email, role, name, gender, birthdate);
        }
    }





    const userSettings = new UserSettings(
        '/user/home',
        'home',
        'sergio@mail.com',
        'admin',
        'Sergio',
        'M',
        new Date('10-07-1999')
    );
    console.log({userSettings});

})();