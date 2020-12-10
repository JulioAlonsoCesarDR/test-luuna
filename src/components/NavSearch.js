import React, { Fragment, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionSetListUsers, actionSetLoading } from '../redux/actions';
import { getUser } from '../services'


const  NavSearch= (props) => {
    const [user, setUser] = useState("");
    const [eror,setError] = useState(false)
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setError(false)
        setUser(e.target.value)
    }
    const handleClick = (e) => {
        dispatch(actionSetLoading(true))
        e.preventDefault();
        if( user.trim() === "" ) {
            setError(true)
            dispatch(actionSetListUsers([]))
            return
        }
        getUser(user).then( res => {
            if(res.status ===   200) {
                history.push("/user");
                dispatch(actionSetListUsers(res.data.items));
                dispatch(actionSetLoading(false))
            }
            else(
                dispatch(actionSetListUsers([]))
            )
            setError(false)
        }).catch( err =>{
            console.log('err', err)
        })
    }
    return (
        <Fragment>
            <div className='container'>
            <nav className="navbar mt-5">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    title="Nombre de susuario"
                    value={user}
                    onChange={(e)=>handleChange(e)}/>
                        <button className="btn btn-outline-primary" type="submit"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                            title="Buscar Ususarios"
                            onClick={(e)=>handleClick(e)}>
                            Buscar
                        </button>
                </form>
            </nav>
                <small>
                    Ingresa el nombre de un usuario
                </small>
                <br/>
                {eror &&
                    <div className="alert alert-danger col-md-6 mt-3" role="alert">
                        El nombre es requerido
                    </div>
                }
            </div>
        </Fragment>
    )
}
export default NavSearch
