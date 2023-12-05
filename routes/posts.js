import Express  from "express";
const posts = Express();
import { createPosts , getPost } from "../controllers/postsController.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({storage: storage});

posts.post(''  ,  upload.single('imagen') ,  createPosts);
posts.get('', getPost);


export {

    posts

}