import  Express  from "express";
const app = Express();

import { auth } from "./routes/auth.js";
import { dataExample } from "./routes/dataExample.js";
import { users } from "./routes/users.js";
import { posts } from "./routes/posts.js";
import cookieParser from "cookie-parser";
import path from 'path';

import cors from 'cors';

app.use(Express.json());
app.use(cookieParser());
app.use(Express.static('public'));
const corsOptions = {
    origin : 'http://localhost:5173/', 
    credentials : true
}
app.use(cors(corsOptions));
app.use('/API/auth', auth);
app.use('/API/dataExample', dataExample);
app.use('/API/users', users);
app.use('/API/posts', posts);
app.get('/*', (req, res) => {
    res.sendFile(path.join( 'public', 'index.html'));
  });

app.listen(4000, ()=>{

    console.log("Servidor en puerto 4000");

})