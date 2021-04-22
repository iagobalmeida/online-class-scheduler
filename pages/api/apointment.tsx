import { ObjectId } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../utils/database'

interface ErrorResponseType {
    error: string
}

interface SucessResponseType {
    date:               string,
    teacher_id:         string,
    teacher_name:       string,
    student_id:         string,
    student_name:       string,
    course:             string,
    location:           string,
    appointment_link:   string
}

export default async(
    req: NextApiRequest, 
    res: NextApiResponse<ErrorResponseType | SucessResponseType>
):Promise<void> => {
    // POST  - Adiciona usuário
    if ( req.method == 'POST'){
        // Pega informações do body da requisição e valida
        const { date, teacher_id, teacher_name, student_id, student_name, course, location, appointment_link } = req.body;
        if(!date || !teacher_id || !teacher_name || !student_id || !student_name || !course || !location) { res.status(400).json({ error:'Missing body parameter'}); return; }

        
        // Conecta-se ao banco de dados
        const { db }   = await connect();

        // Verifica se o professor existe
        if(! await db.collection('users').findOne({_id: new ObjectId(teacher_id)}) ){ res.status(400).json({ error:`Teacher ${teacher_name} with ID ${teacher_id} does not exist`}); return; }
        // Verifica se o aluno existe
        if(! await db.collection('users').findOne({_id: new ObjectId(student_id)}) ){ res.status(400).json({ error:`Teacher ${student_name} with ID ${student_id} does not exist`}); return; }

        // Cria objeto de appointment
        const appointment = {
            date,
            teacher_id,
            teacher_name,
            student_id,
            student_name,
            course,
            location,
            appointment_link : appointment_link ? appointment_link : "No link"
        };

        // Cria registros no banco de appointment
        await db.collection('users').updateOne({ _id: new ObjectId(teacher_id)}, { $push: { appointments: appointment }, $inc: { coins: 1  } });
        await db.collection('users').updateOne({ _id: new ObjectId(student_id)}, { $push: { appointments: appointment }, $inc: { coins: -1 } });
        res.status(200).json(appointment);
    }
    // ??? - Retorna erro
    else{
        res.status(400).json({ error: 'Wrong requisition method' });
    }
    
}