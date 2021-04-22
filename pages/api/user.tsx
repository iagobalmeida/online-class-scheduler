import { ObjectID } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../utils/database'

interface ErrorResponseType {
    error: string
}

interface SucessResponseType {
    _id:                    string,
    password:               string,
    name:                   string,
    cellphone:              string,
    isTeacher:              boolean
    courses:                string[],
    available_hours:        object,
    available_locations:    object[],
    appointments:           object[],
    coins:                  number,
    reviews:                number[]
}

export default async(
    req: NextApiRequest, 
    res: NextApiResponse<ErrorResponseType | SucessResponseType>
):Promise<void> => {
    // POST  - Adiciona usuário
    if ( req.method == 'POST'){
        // Pega informações do body da requisição e valida
        const { name, password, email, cellphone, isTeacher, courses, available_hours, available_locations, appointments, coins, reviews } = req.body;
        if(!name || !password || !email || !cellphone || (isTeacher == undefined)) { res.status(400).json({ error:'Missing body parameter'}); return; }
        
        // Conecta-se ao banco de dados
        const { db }   = await connect();
        const response = await db.collection('users').insertOne({
            name:                   name,
            password:               password,
            email:                  email,
            cellphone:              cellphone,
            isTeacher:              isTeacher,
            courses:                courses             ? courses :             [],
            available_hours:        available_hours     ? available_hours :     {},
            available_locations:    available_locations ? available_locations : [],
            appointments:            appointments       ? appointments :        [],
            coins:                  coins               ? coins :               0,
            reviews:                reviews             ? reviews :             []
        });
        res.status(200).json(response.ops[0]);
    }
    // ??? - Retorna erro
    else{
        res.status(400).json({ error: 'Wrong requisition method' });
    }
    
}