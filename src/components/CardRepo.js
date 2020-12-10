import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AvatarContainer = styled.div `
    align-items: center;
    display: flex;
    justify-content: center;
    margin-right: 1rem;
    width: 3rem;
`
const AvatarLogo = styled.img `
    border-radius: 50%;
`

/* Data Dummy */
const dummy = [
    {
        "id": 7823261,
        "name": "simple-line-icons",
        "private": false,
        "owner": {
            "login": "JulioAlonsoCesarDR",
            "avatar_url": "https://avatars2.githubusercontent.com/u/9398944?v=4",
        },
        "html_url": "https://github.com/JulioAlonsoCesarDR/simple-line-icons",
        "description": "Simple and Minimal Line Icons",
        "created_at": "2017-01-06T19:26:11Z",
        "git_url": "git://github.com/JulioAlonsoCesarDR/simple-line-icons.git",
        "clone_url": "https://github.com/JulioAlonsoCesarDR/simple-line-icons.git",
        "language": "CSS",
        "default_branch": "master"
    },
    {
        "id": 782326,
        "name": "simple-line-icons",
        "private": false,
        "owner": {
            "avatar_url": "https://avatars2.githubusercontent.com/u/9398944?v=4",
        },
        "html_url": "https://github.com/JulioAlonsoCesarDR/simple-line-icons",
        "description": "Simple and Minimal Line Icons",
        "created_at": "2017-01-06T19:26:11Z",
        "git_url": "git://github.com/JulioAlonsoCesarDR/simple-line-icons.git",
        "clone_url": "https://github.com/JulioAlonsoCesarDR/simple-line-icons.git",
        "language": "CSS",
        "default_branch": "master"
    },
    {
        "id": 7823,
        "name": "simple-line-icons",
        "private": false,
        "owner": {
            "login": "JulioAlonsoCesarDR",
            "avatar_url": "https://avatars2.githubusercontent.com/u/9398944?v=4",
        },
        "html_url": "https://github.com/JulioAlonsoCesarDR/simple-line-icons",
        "description": "Simple and Minimal Line Icons",
        "created_at": "2017-01-06T19:26:11Z",
        "clone_url": "https://github.com/JulioAlonsoCesarDR/simple-line-icons.git",
        "language": "CSS",
        "default_branch": "master"
    },
]

const copyClone = (id) => {
        var copyText = document.getElementById(id);
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
}
const CardRepo = props => {
    const { listRepo } = props
    return (
        <Fragment>
            <div className="row">
                {listRepo.map((item) => (
                    <div key={item.id} className="col-md-6 col-sm-12 p-3">
                        <div className="card">
                            <div className="card-body row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="d-flex align-items-center">
                                        <AvatarContainer>
                                            <a href={item.owner.url} target="_blank">
                                                <AvatarLogo className='img-fluid float-start'
                                                    src={item.owner.avatar_url} alt="Avatar" title="Ir a GitHub"/>
                                            </a>
                                        </AvatarContainer>
                                            <a href={item.html_url} target="_blank"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="bottom"
                                                title="Ir al repositorio">
                                            <b>{item.name}</b>
                                        </a>
                                    </div>
                                    <div className="">
                                        <span>Descripción:</span> <p className="fst-italic">{item.description} </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <span>Lenguaje:</span><p className="fst-italic">{item.language}</p>
                                    <div className="input-group mb-3">
                                        <input id={item.id} type="text" className="form-control" value={item.clone_url}/>
                                        <button className="btn btn-outline-secondary" type="button"
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="bottom"
                                            title="Copiar por HTTPS "
                                            onClick={()=>copyClone(item.id)}
                                        > <i className="fa fa-clone"/></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

CardRepo.propTypes = {

}

export default CardRepo
