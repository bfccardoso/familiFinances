import React, { useState } from 'react'
import Input from '../../components/input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import { UserInterface } from '../api/user'
import { useQuery } from 'react-query'

const initialFormState = {
    name: '',
    email: '',
    renda: 0.0,
    porcentagem: 0.0
}

const UserSchema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('Insira um email válido').required('O email é obrigatório'),
    renda: Yup.number().required('A renda é obrigatória'),
    porcentagem: Yup.number().required('A porcentagem é obrigatória')
})

const User = () => {
    const [newUser, setNewUser] = useState(false)
    const router = useRouter()
    const [msgError, setMsgError] = useState('')
    const { data } = useQuery('users', countUsers)

    const createUser = async (user: UserInterface) => {
        try{
            const resp = await fetch(`/api/user/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify([user, 'create']),
            })
            const {error} = await resp.json()
            if(!error){
                router.push('/')
            } else {
                setMsgError(error)
            }
        } catch(err) {
            console.log(err)
            setMsgError('Erro ao criar usuário.')
        }
    }

    async function countUsers() {
        try{
            const resp = await fetch(`/api/user/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify([{}, 'count']),
            })
            const {count} = await resp.json()
            return count
        } catch(err) {
            console.log(err)
            return -1
        }
    }

    const form = useFormik({
        initialValues: initialFormState,
        validationSchema: UserSchema,
        onSubmit: async user => {
            createUser(user)
        }
    })

    return(
        <>
            {
                !data && !newUser &&
                <div>
                    <p className="text-red-500 text-center text-2xl">NÃO HÁ MEMBRO CADASTRADO</p>
                    <div className='grid grid-cols-9'>
                        <div className='col-span-4'></div>
                        <button
                            type="submit"
                            onClick={() => {
                                setNewUser(true)
                            }}
                            className="w-40 bg-blue-500 text-white font-bold py-2 rounded-2xl hover:bg-blue-700 mt-4"
                        >
                            Novo Membro
                        </button>
                        <div className='col-span-4'></div>
                    </div>
                </div>
            }
            {(data > 0 || newUser) && <form className="flex flex-col space-y-2" onSubmit={form.handleSubmit}>
                {msgError && <p className="text-red-500 text-center text-2xl">{msgError}</p>}
                <Input
                    label="Nome"
                    name="name"
                    type="text"
                    placeholder="Nome"
                    onChange={form.handleChange}
                    value={form.values.name}
                    msg_error={form.errors.name}
                />
                <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={form.handleChange}
                    value={form.values.email}
                    msg_error={form.errors.email}
                />
                <Input
                    label="Renda"
                    name="renda"
                    type="number"
                    placeholder="Renda"
                    onChange={form.handleChange}
                    value={form.values.renda}
                    msg_error={form.errors.renda}
                />
                <Input
                    label="Porcentagem"
                    name="porcentagem"
                    type="number"
                    placeholder="Porcentagem"
                    onChange={form.handleChange}
                    value={form.values.porcentagem}
                    msg_error={form.errors.porcentagem}
                />
                <div className='grid grid-cols-9'>
                    <button
                        type="submit"
                        className="w-40 bg-blue-500 text-white font-bold py-2 rounded-2xl hover:bg-blue-700"
                    >
                        Enviar
                    </button>
                    <button
                        type="submit"
                        onClick={() => {
                            setNewUser(false)
                            form.resetForm()
                        }}
                        className="w-40 bg-blue-500 text-white font-bold py-2 rounded-2xl hover:bg-blue-700"
                    >
                        Cancelar
                    </button>
                </div>
            </form>}
        </>
    )
}

export default User