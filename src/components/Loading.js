import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';


const Loading = () => {
    const isLoading = useSelector( state => state.loading );
    return (
        <Fragment>
            { isLoading ?
                <div className="d-flex justify-content-center">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                : null
            }
        </Fragment>
    )
}

Loading.propTypes = {

}

export default Loading
