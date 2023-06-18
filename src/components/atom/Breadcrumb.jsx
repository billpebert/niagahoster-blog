import React from "react"

export default function Breadcrumb({ links, lastItem }) {
	return (
		<ul className="inline-flex items-center">
			{links.map((link, index) => {
				return (
					<li
						className="text-xs text-slateGrey after:content-[url('/assets/svg/ic-arrow_right-16x16.svg')] after:w-4 after:h-4 after:mx-[6px] last:after:content-none last:after:mx-0 inline-flex items-center"
						key={index}
					>
						<a href={link.route} className="text-hosterBlue hover:text-darkBlue">
							{link.title}
						</a>
					</li>
				)
			})}

			{lastItem && (
				<li className="text-xs text-slateGrey after:content-[url('/assets/svg/ic-arrow_right-16x16.svg')] after:w-4 after:h-4 after:mx-[6px] last:after:content-none last:after:mx-0 inline-flex items-center">
					{lastItem}
				</li>
			)}
		</ul>
	)
}
