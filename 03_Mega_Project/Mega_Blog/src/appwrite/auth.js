// here we have written a code to avoid vendor locking



import config from "../config/config"

import {Client, Account,ID} from "appwrite"

export class authService {
    client = new Client()

    account;

    authService(projectUrl , projectId){
            this.client
                .setEndpoint(projectUrl)
                .setProject(projectId)

            this.account = new Account(this.client)
    }


    // yaha pr ham ek method bana rahe hai jo ki ek wrapper hoga appright ke fuctions ka jisse hame baar baar appright ke fucntions nhi use krne parenge to make our app from getting into vendor locking 
    async createAccount({email ,password ,name}){
        try {
           const user = await this.account.create({
              userId :  ID.unique() , 
              email , 
              password , 
              name
            })

            if(user){
                // agar user hai tho ham user ko login krwa denge
               return this.loginAccount(email,password)
            }
            else{
                return user    
            }

            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }


    async loginAccount({email ,password}){
        try {

            const user = await this.account.createEmailPasswordSession({email , password})
    
            if(user){
                return `user logged in succesfully ${user}`
            }
            else{
                return `error occured while regstering the user ${user}`
            }
        } catch (error) {
            console.log(error)
        }
    }



    // here we are defining a defining a fucntionality to show the user profile to the user 
    async getCurrentUser(){
        try {
            const user = await this.account.get()
            console.log(`user porfile : ${user}`)
        } catch (error) {
            console.log(error)
        }

        // ye ham isliye kr rhe hai kyuki agar get user ma kuch nhi aya tho code fatega nhi null return ho jayega 
        return null
    }



    async logoutAccount(){
        try {
            const user = await this.account.deleteSessions()
        } catch (error) {
            console.log(error)
        }
    }

}

const AUTHSERVICE= new authService(config.appwriteUrl , config.projectId)
export default AUTHSERVICE