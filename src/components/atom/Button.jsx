import React from "react"
import { Link } from "react-router-dom"

export default function Button({label, type, className = '', route='', target=''}) {
    if(type == 'primary') {
        className += ' btn-yellow'
    } else if(type == 'secondary') {
        className += 'false'
    } else if(type == 'outline') {
        className += ' btn-outline-white'
    } else if(type == 'text') {
        className += ' text-hosterBlue font-bold text-base tracking-[0.02em] px-10 py-3'
    }
	return (
		<Link to={route} target={target} className={className}>
			{label}
		</Link>
	)
}
