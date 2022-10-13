import { initializeApp } from "firebase/app"
import { Database, getDatabase } from "firebase/database"

let database: Database

export function connect() {
  if (!database) {
    let app = initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID
    })

    database = getDatabase(app)
  }

  return database
}