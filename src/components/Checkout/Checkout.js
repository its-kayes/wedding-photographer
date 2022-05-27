import React from 'react';

const Checkout = () => {
    return (
        <div className="col-md-4 container bg-default">

            <h4 className="my-4">
                Send Me Your Details
            </h4>

            <form>
                <div className="form-row">
                    <div className="col-md-6 form-group">
                        <label >First Name</label>
                        <input type="text" className="form-control" placeholder="First Name" />
                    </div>

                    <div className="col-md-6 form-group">
                        <label >Last Name</label>
                        <input type="text" className="form-control" placeholder="Last Name" />
                    </div>
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Username" />
                    </div>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Email" required />
                </div>

                <div className="form-group">
                    <label >Address</label>
                    <input type="text" className="form-control" placeholder="1234 Main Street" required />
                </div>
            </form>
        </div>
    );
};

export default Checkout;