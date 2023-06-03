import React from "react"

export default function TopMenu() {
	return (
		<section className="bg-darkBlue p-3 relative z-10">
			<ul className="container text-white text-base font-semibold flex lg:items-center lg:justify-center flex-nowrap overflow-x-auto overflow-y-hidden gap-5 lg:gap-10">
				<li className="inline-flex after:content-[url('/src/assets/svg/ic-arrow_down.svg')] after:ml-[2px] after:max-h-[24px]">
					Tutorial
				</li>
				<li className="inline-flex after:content-[url('/src/assets/svg/ic-arrow_down.svg')] after:ml-[2px] after:max-h-[24px]">
					Digital Marketing
				</li>
				<li className="inline-flex after:content-[url('/src/assets/svg/ic-arrow_down.svg')] after:ml-[2px] after:max-h-[24px]">
					Web Development & Design
				</li>
				<li className="inline-flex after:content-[url('/src/assets/svg/ic-arrow_down.svg')] after:ml-[2px] after:max-h-[24px]">
					Insight Bisnis
				</li>
				<li className="inline-flex after:content-[url('/src/assets/svg/ic-arrow_down.svg')] after:ml-[2px] after:max-h-[24px]">
					News & Updates
				</li>
			</ul>
		</section>
	)
}
