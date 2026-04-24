import React, { useState } from "react";

export default function Form({ formUpdateHandler }) {
    const [user, setUser] = useState({
        name: "",
        email: "",
        age: "",
        gender: ""
    })
    const [error, setErrorr] = useState({});


    function handlerChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    function validateForm() {
        const errorObject = {};
        if (user.name.trim() == "") errorObject.name = "Name is required";
        if (user.email.trim() == "") errorObject.email = "Email is required";
        if (user.age.trim() == "") errorObject.age = "Age is required";
        if (user.gender == "") errorObject.gender = "Gender is required";
        setErrorr(errorObject);
        return Object.keys(errorObject).length === 0;
    }



    function submitHandler(e) {
        e.preventDefault();
        if (validateForm()) {
            formUpdateHandler(user);
            setUser({
                name: "",
                email: "",
                age: "",
            })
            setErrorr({});

        }
    }

    return (
        <div className="col-5 mt-5">
            <div className="card shadow rounded-4">
                <div className="card-body">
                    <h3 className="text-center mb-4">Update Student</h3>

                    <form onSubmit={submitHandler}>
                        <div className="row">

                            {/* Name */}
                            <div className=" mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handlerChange}
                                    className="form-control"
                                    placeholder="Enter name"
                                    value={user.name}

                                />
                                {error.name && <p className="text-danger">{error.name}</p>}
                            </div>

                            {/* Email */}
                            <div className=" mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handlerChange}
                                    className="form-control"
                                    placeholder="Enter email"

                                />
                                {error.email && <p className="text-danger">{error.email}</p>}

                            </div>

                            {/* Age */}
                            <div className=" mb-3">
                                <label className="form-label">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    onChange={handlerChange}
                                    className="form-control"
                                    placeholder="Enter age"

                                />
                                {error.age && <p className="text-danger">{error.age}</p>}
                            </div>

                            {/* Gender */}
                            <div className=" mb-3">
                                <label className="form-label">Gender</label>
                                <select className="form-select" onChange={handlerChange} name="gender">
                                    <option>Select gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                                {error.gender && <p className="text-danger">{error.gender}</p>}
                            </div>


                        </div>

                        {/* Buttons */}
                        <div className="text-center mt-3">
                            <button type="submit" className="btn btn-primary me-2">
                                Submit
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}