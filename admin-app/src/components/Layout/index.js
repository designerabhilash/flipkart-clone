import React from 'react'
import Header from '../Header'

function Layout(props) {
    return (
        <>
            <Header/>
            <div className="container-fluid p-5">
                {props.children}
            </div>
        </>
    )
}

export default Layout
