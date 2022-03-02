import React from "react"
import { useState, useContext } from "react"
import authService from "../../services/auth.service"
import { MessageContext } from "../../context/message.context"
import { useNavigate } from "react-router-dom"
import { Form } from 'react-bootstrap'



const SignUpForm = () => {

    const [signupForm, setSignupForm] = useState({

        username: "",
        password: "",
        email: ""

    })

    const { setMessageInfo, setShowMessage } = useContext(MessageContext)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { name, value } = e.target
        setSignupForm({
            ...signupForm,
            [name]: value
        })
    }


    function handleSubmit(e) {

        e.preventDefault()

        authService
            .signup(signupForm)
            .then(({ data }) => {
                console.log(data)
                setShowMessage(true)
                setMessageInfo({ title: 'Felicidades', desc: 'Te has registrado correctamente' })
                navigate('/inicio-sesion')
            })

            .catch(err => console.log(err))
    }


    return (



        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="email" name="email" value={signupForm.email} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupUserName">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control type="userName" placeholder="Nombre de usuario" name="username" value={signupForm.username} onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={signupForm.password} onChange={handleInputChange} />
            </Form.Group>
            <button color="unique" type="submit">
                Registrate
            </button>
        </Form >
    );
}

export default SignUpForm