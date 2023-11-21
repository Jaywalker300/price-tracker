'use server'

import mongoose from 'mongoose'

let isConnected = false // this is to check the connection status

export const connectToDB = async()=>{
    mongoose.set('strictQuery', true)

    if(!process.env.MONGODB_URI) return console.log('MONGODB_URI is not connected')

    if (isConnected) return console.log ('using existing database')

    try {
        await mongoose.connect(process.env.MONGODB_URI)
        isConnected = true

        console.log('Database connection is successful')

    } catch (error: any) {
        console.log(error.message)
        
    }
}