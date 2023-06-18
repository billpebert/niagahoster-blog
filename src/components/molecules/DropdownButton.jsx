import React from "react"

export default function DropdownButton({ name }) {
	return (
        <>
            <div
                className="inline-flex after:content-[url('/assets/svg/ic-arrow_down.svg')] after:ml-[2px] after:max-h-[24px] cursor-default"
                data-dropdown-toggle={`dropdown${name.replace(/\s/g, '')}`}
                data-dropdown-trigger="hover"
                data-dropdown-offset-distance="20"
                // data-dropdown-delay="0"
            >
                {name}
            </div>
        </>
	)
}
