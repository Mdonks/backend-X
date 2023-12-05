import { db } from "../database/conn.js";

const createUser = async (req, res) =>{

    const params = [
        req.body.user_name, 
        req.body.email,
        req.body.pass, 
        2
    ]

    const sql =  `insert into tbl_users 
                    (user_name, email, pass, id_role)
                  values 
                    ($1, $2, $3, $4) 
                returning *`;

    
    const result = await db.query(sql, params);

    res.json(result);

}


export{
    createUser
}