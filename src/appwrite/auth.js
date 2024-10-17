
import { Client, Account ,ID} from 'appwrite';
import conf from './conf';


export class AuthService {
    client = new Client();
    account

    constructor(){
        this.client
            .setProject(conf.PROJECT_ID)
            .setEndpoint(conf.ENDPOINT)
        this.account = new Account(this.client)
    }
    async createAccount({ email, password, name, phone }) {
        try {
            // Create a unique user ID or let Appwrite generate one
            const userAccount = await this.account.create(
                ID.unique(),  // Automatically generates a unique ID for the user
                email,
                password,
                name ,
                phone
            );
    
            if (userAccount) {
                // You can call another method here if needed
                alert('Signup successful!');
                return userAccount;
            } else {
                alert("Signup failed");
                return null;  // No user account was created
            }
        } catch (error) {
            console.log("Error creating account:", error.message);
            alert('Error: ' + error.message);
        }
    }
    

    async login({email,password}){
        try {
           return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
             console.log("Login ERROR : ", error)
        }
    }

    async getCurrentUser(){
        try {
            await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error)
        }
        return null
    }

    async logOut(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw(error)
        }
    }
}

const authService = new AuthService();
export default authService