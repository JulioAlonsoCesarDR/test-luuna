import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import CardUser from '../components/CardUser'

function ListUsers() {
    const listUser = useSelector( state => state.listUser );
     return (
        <Fragment>
            <div className="container">
                {
                    listUser.length > 0 ?
                    <CardUser listUsers={listUser}/>
                    : (
                        <div className="text-center">
                            <h1> No hay resultados </h1>
                            <small>Prueba con otro nombre de usuario</small>
                        </div>
                    )
                }
            </div>
        </Fragment>
    )
}

export default ListUsers

