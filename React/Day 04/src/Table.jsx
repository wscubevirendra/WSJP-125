import React from "react";

export default function StudentTable({ formData }) {
    return (
        <div className="col-7 mt-5">
            <div className="card shadow rounded-4">
                <div className="card-body">
                    <h3 className="text-center mb-4">Student Data</h3>

                    <div className="table-responsive">
                        <table className="table table-bordered table-hover align-middle">

                            {/* Table Head */}
                            <thead className="table-dark text-center">
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="text-center">

                                {
                                    formData.map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{data.age}</td>
                                                <td>{data.gender}</td>
                                              
                                                <td>
            
                                                    <button className="btn btn-danger btn-sm">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
}