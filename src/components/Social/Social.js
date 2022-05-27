import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
let errorElement;

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    let nevigate = useNavigate();

    if (error || gitError) {
        console.error(error) || console.log(gitError)
        errorElement = <p className='text-center'> Error Login </p>

    }

    if (user || gitUser) {
        nevigate('/home')
    }



    return (
        <div>
            <div className='d-flex'>
                <div style={{ height: '1px' }} className='mt-4 bg-primary w-50'></div>
                <p className='p-3'> OR </p>
                <div style={{ height: '1px' }} className='mt-4 bg-primary w-50'></div>
            </div>
            <div className='text-white bg-danger bg-opacity-50 rounded'>
                {errorElement}
            </div>
            <div className=''>
                <div onClick={() => signInWithGoogle()} style={{ height: '50px' }} className='d-flex justify-content-center'>
                    <button className='bg-light w-50 rounded-pill' > <i className="fa-brands fa-google"> Continue With Google </i>  </button>
                </div>
                <div onClick={()=> signInWithGithub()} style={{ height: '50px' }} className='d-flex justify-content-center mt-4'>
                    <button className='bg-success bg-opacity-50 text-white w-50 rounded-pill' > <i className="fa-brands fa-github"> Continue With GitHub </i>  </button>
                </div>
            </div>
        </div>
    );
};

export default Social;