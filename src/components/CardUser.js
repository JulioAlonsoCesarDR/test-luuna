import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AvatarContainer = styled.div `
    align-items: center;
    display: flex;
    justify-content: center;
    width: 5rem;
`
const AvatarLogo = styled.img `
    border-radius: 50%;
`

/* Data Dummy */
const dummy = [
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
]

const CardUser = (props) => {
    return (
        <Fragment>
            <div className='row'>
                { dummy.map((item) => (
                    <div className="col-md-4 col-sm-12 p-3">
                        <div className="card">
                            <div className='card-body d-flex' title="Ir a GitHub">
                                <AvatarContainer>
                                    <a href={item.url}>
                                        <AvatarLogo className='img-fluid float-start'
                                            src={item.avatar_url} alt="Avatar" title="Ir a GitHub"/>
                                    </a>
                                </AvatarContainer>
                                <div className='text-center w-100 row align-items-center justify-content-center'>
                                    <b> {item.login} </b>
                                </div>
                            </div>
                                <button type="button" class="btn btn-outline-secondary w-100">Ver Repositorios</button>
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
