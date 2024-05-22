import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv"


dotenv.config({
  path: './env'
});



connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000)
  })
  .catch()


app.get('/', (req, res) => {
  res.send('Bt Coaching!')
});








// import express from "express";
// const app = express()

//   (async () => {
//     try {
//       mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//       app.on("error", (error) => {
//         console.log("ERROOR :", error);
//         throw error
//       })

//       app.listten(process.env.PORT, () => {
//         console.log(`App is running form mongoose ${process.env.PORT}`);
//       })

//     } catch (error) {
//       console.error("ERROR: ", error);
//       throw err;
//     }
//   })();



































// import 'dotenv/config'
// import express from 'express';
// import cors from "cors"
// import cookieParser from 'cookie-parser';
// const app = express()
// const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Bt Coaching!')
// });
// app.get('/riad', (req, res) => {
//   res.send('i am from riad !')
// });
// app.get('/goru', (req, res) => {
//   res.send('once goru is always goru!')
// });
// app.get('/rifat', (req, res) => {
//   res.send('my name is rifatul islam riad and i want to login this page')
// });

// app.get('/luck', (req, res) => {
//   const jokes = [
//   {
//     "id": 1,
//     "title": "Atoms",
//     "content": "Why don't scientists trust atoms? Because they make up everything!"
//   },
//   {
//     "id": 2,
//     "title": "Scarecrow",
//     "content": "Why did the scarecrow win an award? Because he was outstanding in his field!"
//   },
//   {
//     "id": 3,
//     "title": "Spaghetti",
//     "content": "What do you call fake spaghetti? An impasta!"
//   },
//   {
//     "id": 4,
//     "title": "Penguin",
//     "content": "How does a penguin build its house? Igloos it together!"
//   },
//   {
//     "id": 5,
//     "title": "Skeletons",
//     "content": "Why don't skeletons fight each other? They don't have the guts."
//   }
// ];
// res.send(jokes);

// });

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost: ${port}`)
// })
