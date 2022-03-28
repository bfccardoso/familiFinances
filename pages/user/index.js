import React from 'react'
import Input from '../../components/input'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialFormState = {
    name: '',
    email: '',
    renda: '',
    porcentagem: '',
    errorMessage: ''
}

const UserSchema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string().email('Insira um email válido').required('O email é obrigatório'),
    renda: Yup.string().required('A renda é obrigatória'),
    porcentagem: Yup.string().required('A porcentagem é obrigatória')
})

const User = () => {
    const form = useFormik({
        initialValues: initialFormState,
        validationSchema: UserSchema,
        onSubmit: values => {
            console.log(values)
        }
    })

    return(
        <form className="flex flex-col space-y-2" onSubmit={form.handleSubmit}>
            <Input
                label="Nome"
                name="name"
                type="text"
                placeholder="Nome"
                onChange={form.handleChange}
                value={form.values.name}
                errorMessage={form.errors.name}
            />
            <Input
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={form.handleChange}
                value={form.values.email}
                errorMessage={form.errors.email}
            />
            <Input
                label="Renda"
                name="renda"
                type="text"
                placeholder="Renda"
                onChange={form.handleChange}
                value={form.values.renda}
                errorMessage={form.errors.renda}
            />
            <Input
                label="Porcentagem"
                name="porcentagem"
                type="text"
                placeholder="Porcentagem"
                onChange={form.handleChange}
                value={form.values.porcentagem}
                errorMessage={form.errors.porcentagem}
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