import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import NavSearch from '../components/NavSearch'

function Header(props) {
    return (
        <Fragment>
            <div className=" navbar navbar-light bg-dark shadow py-4">
                <div className="container">
                    <img className='img-fluid' src="https://luuna-bucket.imgix.net/img/header-logo.svg?auto=compress,format" alt="LUUNA" title="LUUNA"/>
                        <h1 className='m-auto text-center text-muted'>
                            Test Luuna
                        </h1>
                </div>
            </div>
        </Fragment>
    )
}

Header.propTypes = {

}

export default Header

