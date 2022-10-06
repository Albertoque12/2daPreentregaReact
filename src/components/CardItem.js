import React from "react"
import { Link } from "react-router-dom"

const CardItem = ({children}) => {
    return (
    <Link to={'/details'}>
        {children}
    </Link>
    )
}

export default CardItem