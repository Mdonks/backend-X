import { db } from "../database/conn.js";

const dataExamplePost = async (req, res)=>{


    const params = [
        req.body.texto, 
        req.user.user_name
    ]


    const sql = `insert into tbl_example 
                (data_example, user_name  )
                values 
                ( $1, $2)
                returning *
                `;

    const result = await db.query(sql, params);

    res.json(result);


} 


export {
 
    dataExamplePost

}