import { NextApiRequest, NextApiResponse } from 'next'
import {prisma} from '../index'

export interface UserInterface {
    name: string,
    email: string,
    renda: number,
    porcentagem: number
}

const userApi = async (req: NextApiRequest, res: NextApiResponse) => {
    let resp = {}
    if(req.body[1] === 'create'){
        resp = await create(req.body[0])
    } else {
        resp = await count()
    }
    res.status(200).json(resp)
}

const create = async (data: UserInterface) => {
    try{
        const exist: UserInterface[] = await prisma.user.findMany({
            where: {
                email: data.email
            }
        })
        if(exist.length > 0){
            return{
                error: 'Usuário já existe'
            }
        } else {
            await prisma.user.create({
                data: {
                    ...data
                }
            })
            return{error: false}
        }
    } catch(err) {
        console.log(err)
        return{
            error: 'Erro ao criar usuário'
        }
    }
}

const count = async () => {
    try{
        const count: Number = await prisma.user.count()
        return{count: count}
    } catch(err) {
        console.log(err)
        return{
            count: 'Erro ao contar usuários'
        }
    }
}

export default userApi
