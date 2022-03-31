import React, { useState } from 'react'
import Input from '../../components/input'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'

const initialFormState = {
    name: '',
    email: '',
    renda: '',
    porcentagem: ''
}

const UserSchema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('Insira um email válido').required('O email é obrigatório'),
    renda: Yup.string().required('A renda é obrigatória'),
    porcentagem: Yup.string().required('A porcentagem é obrigatória')
})

const User = () => {
    const router = useRouter()
    const [msgError, setMsgError] = useState('')

    const form = useFormik({
        initialValues: initialFormState,
        validationSchema: UserSchema,
        onSubmit: async values => {
            try{
                const resp = await fetch(`/api/user/create`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values),
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
    })

    return(
        <form className="flex flex-col space-y-2" onSubmit={form.handleSubmit}>
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
            <button
                type="submit"
                className="w-40 bg-blue-500 text-white font-bold py-2 rounded-2xl hover:bg-blue-700"
            >
                Enviar
            </button>
        </form>
    )
}



export default User