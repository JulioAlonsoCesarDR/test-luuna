import React, { Fragment } from 'react'
const  NavSearch= (props) => {
    return (
        <Fragment>
            <div className='container'>
            <nav className="navbar mt-5">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Nombre de susuario"/>
                    <button className="btn btn-outline-primary" type="submit"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        title="Buscar Ususarios">
                        Buscar
                    </button>
                </form>
            </nav>
                <small>
                    Ingresa el nombre de un usuario
                </small>
            </div>
        </Fragment>
    )
}
export default NavSearch
