import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Social from '../Social/Social';


let errorElement;
const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let [email, setEmail] = useState();


    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let handelEmail = e => {
        let data = e.target.value;
        setEmail(data);
    }

    let handleSubmit = event => {
        event.preventDefault();
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

        let from = location.state?.from?.pathname || "/";
        if (user) {
            navigate(from, { replace: true });
        }

    if (error) {
        console.error(error)
        errorElement = <p className='text-center'> Error Login </p>

    }


    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center', marginTop: '5%', marginBottom: '30px' }} >Please Login</h2>
            <form onSubmit={handleSubmit}>

                <input onChange={handelEmail} type="email" name="email" id="" placeholder='Email Address' required />

                <input ref={passwordRef} type="password" name="password" id="" placeholder='Password' required />

                <div className='d-flex justify-content-center'>
                    <input
                        className='rounded-pill w-50 submit-button'
                        type="submit"
                        value="Login" />
                </div>
            </form>
            <p>New to on it? <Link to="/registration" className='text-danger pe-auto text-decoration-none' >Please Register</Link> </p>
            <p> Forget Password ? <a
                className='text-danger pe-auto text-decoration-none'
                onClick={async () => {
                    await sendPasswordResetEmail(email);
                    alert('Sent email');
                }}
            >
                Reset password
            </a> </p>
            <div className='text-white bg-danger bg-opacity-50 rounded'>
                {errorElement}
            </div>

            <Social></Social>
        </div>
    );
};

export default Login;