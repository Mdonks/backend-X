import { db } from "../database/conn.js";

const createPosts = async (req, res)=>{

    const params = [
        req.body.description,
        req.body.user_name,
        req.file.buffer
    ];

    const sql = `insert into tbl_post 
                    (description, user_name, img)
                values 
                    ($1, $2, $3) 
                returning id, user_name`;
                    
    const result = await db.query(sql, params);

    res.json(result);


}

const getPost = async (req, res) =>{


    const sql = ` select id, description , user_name ,  encode(img, 'base64') img_base64 from tbl_post
    order by create_date desc `;

    const result = await db.query(sql);

    res.json(result);


}


export {
 
    createPosts, 
    getPost

}