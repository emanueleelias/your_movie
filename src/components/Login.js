import axios from "axios";
import swall from "@sweetalert/with-react";
import { useHistory } from "react-router-dom";

const Login = () => {

    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email === '' || password === '') {
            swall(<h2>Los campos estan vacios</h2>);
            return;
        }

        if (email !== '' && !regexEmail.test(email)) {
            swall(<h2>Debes escribir una dirección de correo electrónico válida</h2>);
            return;
        }

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            swall(<h2>Credenciales invalidas</h2>);
            return
        }

        axios
            .post("https://node-api-proxy-alkemy.herokuapp.com/", { email, password })
            .then(res => {
                const token = res.data.token;
                localStorage.setItem('token', token);
                history.push('/listado');
            })
            .catch(error => {
                console.log("Credenciales incorrectas");
            })

    }

    return (
        <>
            <h2>Formulario de login</h2>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Correo electrónico:</span><br />
                    <input type="text" name="email" />
                </label>
                <br />
                <label>
                    <span>Contraseña:</span><br />
                    <input type="password" name="password" />
                </label>
                <br />
                <button type='submit'>Ingresar</button>
            </form>
        </>
    )
}

export default Login;