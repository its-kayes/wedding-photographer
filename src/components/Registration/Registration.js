import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Social from '../Social/Social';


let errorElement;

const Registration = () => {

    const [sendEmailVerification, sending, verifyError] = useSendEmailVerification(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    let navigateLogin = () => {
        navigate('/login');
    }

    let handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await sendEmailVerification();
        alert('Sent email');
        navigate('/home')
    }

    if (error || verifyError) {
        errorElement = <p className='text-center'> Error Login </p>
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center', marginTop: '5%', marginBottom: '30px' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="1" placeholder='Your Name' />

                <input type="email" name="email" id="2" placeholder='Email Address' required />

                <input type="password" name="password" id="3" placeholder='Password' required />

                <div className='d-flex justify-content-center'>
                    <input
                        className='rounded-pill w-50 submit-button'
                        type="submit"
                        value="Register" />
                </div>
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin} >Please Login</Link> </p>
            <div className='text-white bg-danger bg-opacity-50 rounded'>
                {errorElement}
            </div>
            <Social></Social>
        </div>
    );
};

export default Registration;