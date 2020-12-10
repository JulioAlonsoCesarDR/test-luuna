import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import CardRepo from '../components/CardRepo'
import { useSelector } from 'react-redux';

const ListRepo = (props) => {
    const listRepo = useSelector( state => state.listRepo );
    return (
        <Fragment>
            <div className="container">
                {listRepo.length > 0 ?
                    <CardRepo listRepo={listRepo}/>:
                    (
                        <div className="text-center">
                            <h1>
                                El usuario 'usuario' no tiene ningún repositorio
                            </h1>
                        </div>
                    )
                }
            </div>
        </Fragment>
    )
}

ListRepo.propTypes = {

}

export default ListRepo

