import React from 'react'

export default function Search({ setQuery, query }) {
    return (
        <div className="row mb-4">
            <div className="col-md-6 mx-auto">
                <input
                    type="text"
                    className="form-control form-control-lg shadow-sm"
                    placeholder="Search movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>
        </div>
    )
}
