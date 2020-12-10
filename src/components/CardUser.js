import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { getRepo } from '../services';
import { useDispatch } from 'react-redux';
import { actionSetListRepo } from '../redux/actions';


const AvatarContainer = styled.div `
    align-items: center;
    display: flex;
    justify-content: center;
    width: 5rem;
`
const AvatarLogo = styled.img `
    border-radius: 50%;
`

/* TODO: clear Data Dummy test Prototype  */

/* const dummy = [
    {
        avatar_url: 'https://avatars2.githubusercontent.com/u/9398944?v=4',
        login: 'JulioAlonsoCesarDR',
        url: 'https://api.github.com/users/JulioAlonsoCesarDR'
    },
    {
        avatar_url: 'https://avatars2.githubusercontent.com/u/9398944?v=4',
        login: 'JulioAlonsoCesarDR',
        url: 'https://api.github.com/users/JulioAlonsoCesarDR'
    },
    {
        avatar_url: 'https://avatars2.githubusercontent.com/u/9398944?v=4',
        login: 'JulioAlonsoCesarDR',
        url: 'https://api.github.com/users/JulioAlonsoCesarDR'
    }
] */



const CardUser = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();


    const handleClick = (name) => {
        getRepo(name).then(res => {
            if(res.status === 200) {
                dispatch(actionSetListRepo(res.data));
                history.push("/repo");
            }
        })
        .catch( err =>{
            console.log('err', err)
        })
    }
    

    const { listUsers } = props;
    return (
        <Fragment>
            <div className='row'>
                { listUsers.map((item) => (
                    <div key={item.id} className="col-md-4 col-sm-12 p-3">
                        <div className="card">
                            <div className='card-body d-flex' title="Ir a GitHub">
                                <AvatarContainer>
                                    <a href={item.html_url} target="blank">
                                        <AvatarLogo className='img-fluid float-start'
                                            src={item.avatar_url} alt="Avatar" title="Ir a GitHub"/>
                                    </a>
                                </AvatarContainer>
                                <div className='text-center w-100 row align-items-center justify-content-center'>
                                    <a href={item.html_url} target="blank">
                                        <b> {item.login} </b>
                                    </a>
                                </div>
                            </div>
                                <button type="button" className="btn btn-outline-secondary w-100"
                                 onClick={()=>handleClick(item.login)}
                                >
                                    Ver Repositorios
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

CardUser.propTypes = {

}

export default CardUser
