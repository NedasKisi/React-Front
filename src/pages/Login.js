import { useState } from 'react'
import axios from 'axios'
import Header from '../components/header/Header'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')

    const navigate = useNavigate();

    const handleFormChange = (e) => {
        setLoginForm({...loginForm, [e.target.name]: e.target.value})
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', loginForm)
        .then(resp => {
            if(resp.status === 200) {
                localStorage.setItem("token", resp.data.message);
                navigate('/')
            }
        })
        .catch(err => {
            setError('Neteisingi prisijungimo duomenys')
        })
    }
 
    return (
        <>
            <Header />
            <div className="container">
                <h1>Login</h1>
                {error && (
                    <div className="error">{error}</div>
                )}
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label>El. pašto adresas:</label>
                        <input type="text" name="email" onChange={handleFormChange} />
                    </div>
                    <div>
                        <label>Slaptažodis:</label>
                        <input type="password" name="password" onChange={handleFormChange} />
                    </div>
                    <button type="submit">Siųsti</button>
                </form> 
            </div>
        </>
    )
}

export default Login