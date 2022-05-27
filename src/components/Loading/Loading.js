import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div>
            <div className="checkout-container">
                <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span className="visually-hidden">Loading...</span>
                </button>
                <button className="btn btn-primary m-3" type="button" disabled>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
            </div>
        </div>
    );
};

export default Loading;