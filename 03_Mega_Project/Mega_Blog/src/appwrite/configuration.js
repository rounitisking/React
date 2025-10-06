import config from "../config/config"
import {Client, ID , Databases , Storage ,Query} from "appwrite"


export class service {

        client = new Client()

        
        database;
        storage;
        

        service(projectUrl , projectId){
            this.client
            .setEndpoint(projectUrl)
            .setProject(projectId)


            this.database = new Databases(this.client)
            this.storage = new Storage(this.client)
        }



        async createPost({title , slug , content , image, status ,userid}){

                try {

                    // the arguments in the createDocument are databse id , collection id  , document id - which is need to be created and the value we want to store in the database 
                    return await this.database.createDocument({databaseId : config.databaseId , collectionId : config.collectionId , documentId : slug , data : {title , slug , content , image,status ,userid}})
                } catch (error) {
                    console.log(error)
                }
        }


        async updatePost(slug , {title , content , image, status}){
            try {
                return await this.database.updateDocument({databaseId : config.databaseId , collectionId : config.collectionId , documentId : slug , data : {title , content , image,status}})
            } catch (error) {
                console.log(error)
            }
        }


        async deletePost(slug){
            try {
                await this.database.deleteDocument(config.databaseId , config.collectionId , slug)
                return true
            } catch (error) {
                console.log(error)
                return false
            }
        }


        async getPost(slug){
           try {
             return this.database.getDocument(
                 config.databaseId,
                 config.collectionId,
                 slug
             )
           } catch (error) {
            console.log(error)
           }
        }


        //listDocument se hame sare collection ke documents mil jayenge and it takes arguments as databaseId , collectionId -- ye ham tab krte hai jab hame user ki profile dikhani ho 
        // getDocument ham tab use krte hai jab ham ek particularblolg ko dhund rhe ho 


        /*
        In Appwrite, indexes are created to make search and filter queries faster. ⚡

👉 Without an index — Appwrite scans all documents (slow).
👉 With an index — Appwrite directly finds the matching data (fast).

📌 Example:
If you often search users by email, create an index on email — this speeds up queries like:
        databases.listDocuments('dbId', 'collectionId', [Query.equal('email', 'rounit@gmail.com')]);

        */

        //queries ham bina index ke nhi use kr skte hai 
        //here status is a key
        async listPost(query = [Query.equal("status" , "active")]){
            try {
                return this.database.listDocument(
                    config.databaseId,
                    config.collectionId,
                    query
                    
                )
            } catch (error) {
                console.log(error)
            }
        }


        async uploadFile(file){
            try {
                return await this.storage.createFile(
                    config.bucketId,
                    ID.unique(),
                    file
                )
            } catch (error) {
                console.log(error)
            }
        }


        async deleteFile(fileId){
            try {
                 await this.storage.deleteFile(
                    config.bucketId,
                    fileId
                )

                return true
            } catch (error) {
                console.log(error)
            }
        }


        async getFile(fileId){
            try {
                return this.storage.getFilePreview(
                    config.bucketId,
                    fileId
                    // yaha pr ham file ki configuration set krte hai 
                )
            } catch (error) {
                console.log(error)
            }
        }

}

export default SERVICE = new service()