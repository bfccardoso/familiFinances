import { NextApiRequest, NextApiResponse } from 'next'
import {prisma} from '../index'

interface User {
    name: string,
    email: string,
    renda: number,
    porcentagem: number
}

const create = async (req: NextApiRequest, res: NextApiResponse) => {
    try{
        const exist: User[] = await prisma.user.findMany({
            where: {
                email: req.body.email
            }
        })
        if(exist.length > 0){
            res.status(400).json({
                error: 'Usuário já existe'
            })
        } else {
            await prisma.user.create({
                data: {
                    ...req.body
                }
            })
            res.send({error: false})
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({
            error: 'Erro ao criar usuário'
        })
    }
}

export default create