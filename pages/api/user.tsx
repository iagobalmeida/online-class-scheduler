import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../utils/database'

interface ErrorResponseType {
    error: string
}

interface SucessResponseType {
    _id:        string,
    name:       string,
    cellphone:  string,
    isTeacher:  string

}

export default async(
    req: NextApiRequest, 
    res: NextApiResponse<ErrorResponseType | SucessResponseType>
):Promise<void> => {

    // Se a requisição é do tipo POST
    if ( req.method === 'POST' ){

        const { name, email, cellphone, isTeacher } = req.body;

        if(!name || !email || !cellphone || !isTeacher){
            res.status(400).json({ error:'Missing body parameter'});
            return;
        }


        // Conecta-se ao banco de dados
        const { db } = await connect();
        // Executa inserção na collection "users"
        const response = await db.collection('users').insertOne({
            name,
            email,
            cellphone,
            isTeacher
        });
        // Retorna na respose o JSON do response
        res.status(200).json(response.ops[0]);

    // Se a requisição não for do tipo POST
    }else{
        // Retorna na respose a message
        res.status(400).json({ error: 'Wrong requisition method' });
    }
}