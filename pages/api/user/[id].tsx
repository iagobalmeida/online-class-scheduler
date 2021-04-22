import { ObjectId, ObjectID } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../../utils/database'

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
    // GET  - Retorna usuário por email
    if ( req.method == 'GET' ){

        // Pega informações do body da requisição e valida
        const id = req.query.id as string;
        const regexObjectId = new RegExp("^[0-9a-fA-F]{24}$")
        if(!id || !regexObjectId.test(id)){ res.status(400).json({error: 'Wrong id format'}); return; }

        // Conecta-se ao banco de dados
        const { db }   = await connect();
        const response = await db.collection('users').findOne({_id: new ObjectId(id)});
        res.status(response ? 200 : 400).json(response ? response : {error: `User with id '${id}' not found`});        
    }
    // ??? - Retorna erro
    else{
        res.status(400).json({ error: 'Wrong requisition method' });
    }
    
}