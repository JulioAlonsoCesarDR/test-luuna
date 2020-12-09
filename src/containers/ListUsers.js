import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import CardUser from '../components/CardUser'

function ListUsers(props) {
    return (
        <Fragment>
            <div className="container">
                {
                    props.data == null ?
                    (
                        <div className="text-center">
                            <h1> No hay resultados </h1>
                            <small>Prueba con otro nombre de usuario</small>
                        </div>
                    )
                    : <CardUser/>
                }
                
            </div>
        </Fragment>
    )
}

ListUsers.propTypes = {

}

export default ListUsers

