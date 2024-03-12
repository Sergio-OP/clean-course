(() => {

    // Aplicando el principio de responsablidad única
    // Priorizando la composición frente la herencia!

    type Gender = 'M'|'F';

    interface PersonProperties {
        name: string;
        gender: Gender; 
        birthdate: Date;
    }

    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({name, gender, birthdate}: PersonProperties){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProperties {
        email: string;
        role: string;
    }

    class User {
        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({
            email,
            role,
        }: UserProperties){
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials(){
            return true;
        }
    }

    interface SettingsProperties {
            workingDirectory: string;
            lastOpenFolder: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            workingDirectory,
            lastOpenFolder,
        }: SettingsProperties){
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    interface UserSettingsProperties {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string; 
        gender: Gender; 
        birthdate: Date;
    }

    class UserSettings {
        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
            name, gender, birthdate,
            email, role,
            lastOpenFolder, workingDirectory,
        }: UserSettingsProperties){
            this.person = new Person({name, gender, birthdate});
            this.user = new User({email, role});
            this.settings = new Settings({lastOpenFolder, workingDirectory})
        }
    }


    const userSettings = new UserSettings({
        workingDirectory: '/user/home',
        lastOpenFolder: 'home',
        email: 'sergio@mail.com',
        role: 'admin',
        name: 'Sergio',
        gender: 'M',
        birthdate: new Date('10-07-1999'),
    });
    console.log({userSettings});
    userSettings.user.checkCredentials();

})();