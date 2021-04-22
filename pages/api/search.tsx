import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../utils/database'

interface ErrorResponseType {
    error: string
}

export default async(
    req: NextApiRequest, 
    res: NextApiResponse<ErrorResponseType | Array<object>>
):Promise<void> => {
    // GET  - Retorna usuário por email
    if ( req.method == 'GET' ){
        // Pega informações do body da requisição e valida
        const { courses } = req.body;
        if(!courses ){ res.status(400).json({error: 'Missing Courses'}); return; }

        // Conecta-se ao banco de dados
        const { db }   = await connect();
        const response = await db.collection('users').find({ courses }).toArray();
        res.status(response.length > 0 ? 200 : 400).json(response.length > 0 ? response : {error: 'Course not found'});        
    }
    // ??? - Retorna erro
    else{
        res.status(400).json({ error: 'Wrong requisition method' });
    }
    
}