import React from 'react'
import { Link } from 'react-router-dom';
import './AdminRecipeCard.css'

function AdminRecipeCard({ id, title, imageUrl, cuisine, handleDelete }) {
    return (
        <React.Fragment>
            <div className="col-lg-3 col-md-4 col-sm-6 card-deck mt-5">
                <div className="card">
                    <img className="card-img-top" src={imageUrl} alt="food" />
                    <div className="card-body">
                        <h6 className="card-title">{title}</h6>
                        <p className="card-subtitle text-muted">{cuisine}</p>
                    </div>
                    <div className="card-footer text-muted">
                        <Link className="btn btn-primary btn-sm mx-1" to={`/recipe/${id}`}>Edit</Link>
                        <button className="btn btn-danger btn-sm mx-1" onClick={() => handleDelete(id)}>Delete</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AdminRecipeCard
