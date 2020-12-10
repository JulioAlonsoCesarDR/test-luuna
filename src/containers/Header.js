import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <Fragment>
            <div className=" navbar navbar-light bg-dark shadow py-4">
                <div className="container">
                    <Link to="/">
                        <img className='img-fluid' src="https://luuna-bucket.imgix.net/img/header-logo.svg?auto=compress,format" alt="LUUNA" title="LUUNA"/>
                    </Link>
                        <h1 className='m-auto text-center text-muted'>
                            Test Luuna
                        </h1>
                </div>
            </div>
        </Fragment>
    )
}

export default Header

