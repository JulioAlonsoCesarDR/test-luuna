import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import CardRepo from '../components/CardRepo'

function ListRepo(props) {
    return (
        <Fragment>
            <div className="container">
            <CardRepo/>
                {/* {props.data > 0 ?
                    null :
                    (
                        <div className="text-center">
                            <h1>
                                El usuario 'usuario' no tiene ningún repositorio
                            </h1>
                        </div>
                    )
                } */}
            </div>
        </Fragment>
    )
}

ListRepo.propTypes = {

}

export default ListRepo

