import React from "react"

export default function DropdownMenu({ menus, dropdownName, size='default' }) {
	return (
		<div id={`dropdown${dropdownName.replace(/\s/g, '')}`} className={`z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow ${size == 'sm' ? 'w-max' : 'w-44'}`}>
			<ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                {
                    menus.map((menu, index) => {
                        return (
                            <li key={index}>
                                <a href={menu.route} className="block px-4 py-2 hover:bg-gray-100">
                                    {menu.name}
                                </a>
                            </li>
                        )
                    })
                }
			</ul>
		</div>
	)
}
