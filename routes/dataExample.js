import Express  from "express";
const dataExample = Express();
import {dataExamplePost} from '../controllers/dataExampleController.js'
import {validarCookie} from '../helpers/helperCookie.js'

dataExample.post('', validarCookie, dataExamplePost);



export {
    dataExample
}