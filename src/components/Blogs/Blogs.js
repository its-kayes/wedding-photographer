import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div>
            <div className='ans-container'>
                <div className='ans-div'>
                    <h2> Difference between authorization and authentication ? </h2>
                    <p> Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. What comes first authentication or authorization?
                        Authentication is done before the authorization process, whereas authorization process is done after the authentication process. In authentication process, the identity of users are checked for providing the access to the system.While in authorization process, person’s or user’s authorities are checked for accessing the resources. </p>
                </div>
                <div className='ans-div'>
                    <h2> Why are you using firebase?  </h2>
                    <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. Firebase, Backend-as-a-Service (BaaS), is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too.</p>
                    <br />
                    <h3> What other options do you have to implement authentication? </h3>
                    <p>Auth0, Rippling, okta, OneLogin, JumpCloud, Microsoft Azure Active Directory </p>
                </div>
                <div className='ans-div'>
                    <h2> What other services does firebase provide other than authentication ?  </h2>
                    <p>
                        Hosting.
                        Cloud Firestore.
                        Predictions.
                        Cloud Functions.
                        Google Analytics.
                        Cloud Storage.
                        Cloud Messaging.    
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;