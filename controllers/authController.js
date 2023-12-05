import { db } from "../database/conn.js";
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import { validarCookie } from "../helpers/helperCookie.js";

const autenticacion = async (req, res)=>{

    console.log("Entre a metodo de Auth");

    let params = [
        req.body.email, 
        req.body.pass
    ]

    const sql = ` select user_name, email, id_role from tbl_users 
                    where email =  $1
                    and pass = $2 
                    and is_active = true` ;

    const result  = await db.query(sql, params);

    if (result.length > 0) {

        const payload = {
            user_name : result[0].user_name,
            email :   result[0].email,
            id_role :   result[0].id_role
        };


        const token = jwt.sign( payload, 'secret' , { expiresIn: '1h' });
        const tokenCookie = cookie.serialize('myCookie', token, {
            httpOnly : true,
            secure : true,
            sameSite : 'none',
            maxAge : (60*60),
            path : '/'

        })

        res.setHeader('Set-Cookie', tokenCookie);
    
        res.json({mensaje : "Autenticacion Exitosa"})

    }else {

        res.status(404).json({mensaje : "Autenticacion No Exitosa"})


    }


}


const validarCookieActiva = (  req, res)=>{

    res.json(req.user);

}


export  {
    autenticacion, 
    validarCookieActiva
}