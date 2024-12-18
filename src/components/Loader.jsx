import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Loader = () => {
    return (
        <div>
            <Spinner animation="border" role="status" variant="primary" className="spinner-container">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loader
