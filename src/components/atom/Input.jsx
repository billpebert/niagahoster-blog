import React from "react"

export default function Input({placeholder, disabled=false, name, type, className='', searchIcon=false, required=false}) {
    className = 'text-base bg-transparent rounded-full px-[18px] py-3 outline-none border border-[#00183329] text-dark w-full  bg-no-repeat bg-[calc(100%-32px)_center] focus:ring-hosterBlue focus:ring-2 disabled:bg-[#F3F4F6] placeholder:text-grey'

    if (searchIcon) {
        className += ' bg-icSearch disabled:bg-icSearchDisabled focus:bg-icSearchFocus'
    }
	return (
		<input
			type={type}
			className={className}
			placeholder={placeholder}
            name={name}
            disabled={disabled}
            required={required}
		/>
	)
}
