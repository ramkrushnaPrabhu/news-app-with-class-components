import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center'>
                <div className="spinner-grow text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Spinner