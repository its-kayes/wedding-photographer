import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useService from '../../hook/useService';
import './Services.css';

const Services = () => {
    let [service, setService] = useService();
    const navigate = useNavigate();

    let navigateToServiceDetail = value => {
        navigate('/checkout');
    } 


    return (
        <div>
            <div className='services-container'>
                {
                    service.map(service => <div className='per-review' key={service.id}>
                        <div className="card mx-auto sm-card" style={{ width: "40rem", backgroundColor: "#ffe3e7" }}>
                            <img src={service.userImg} className="card-img-top" alt="..." />
                            <div className="card-body w-100">
                                <h5 className="card-title">{service.name}</h5>
                                <h6 className="card-title">Cost {service.price}</h6>
                                <p className="card-text">{service.body}</p>
                                <button onClick={navigateToServiceDetail}  style={{backgroundColor: "#ffcac4"}} className="btn">Hair Me</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;