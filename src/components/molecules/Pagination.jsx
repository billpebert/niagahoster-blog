import React from "react"

export default function Pagination() {
	return (
		<div className="flex justify-center gap-[18px] items-center">
			<a
				href="#"
				className="text-dark text-base font-semibold border border-paginationOutline bg-transparent min-w-[54px] h-[54px] flex items-center justify-center rounded-lg group is-disabled"
			>
				<img
					src="/assets/svg/ic-arrow_left.svg"
					className="group-[.is-disabled]:filter-paginationOutline"
					alt=""
				/>
			</a>
			<a
				href="#"
				className="text-dark !text-white text-base font-semibold border border-paginationOutline !border-transparent bg-hosterBlue min-w-[54px] h-[54px] flex items-center justify-center rounded-lg group"
			>
				1
			</a>
			<a
				href="#"
				className="text-dark text-base font-semibold border border-paginationOutline bg-transparent min-w-[54px] h-[54px] flex items-center justify-center rounded-lg group"
			>
				2
			</a>
			<a
				href="#"
				className="text-dark text-base font-semibold border border-paginationOutline bg-transparent min-w-[54px] h-[54px] flex items-center justify-center rounded-lg group"
			>
				3
			</a>
			<div className="text-dark text-base font-semibold border-transparent bg-transparent min-w-[54px] h-[54px] flex items-center justify-center rounded-lg group">
				<img
					src="/assets/svg/ic-three-dots.svg"
					className="group-[.is-disabled]:filter-paginationOutline"
					alt=""
				/>
			</div>
			<a
				href="#"
				className="text-dark text-base font-semibold border border-paginationOutline bg-transparent min-w-[54px] h-[54px] flex items-center justify-center rounded-lg group"
			>
				13
			</a>
			<a
				href="#"
				className="text-dark text-base font-semibold border border-paginationOutline bg-transparent min-w-[54px] h-[54px] flex items-center justify-center rounded-lg group"
			>
				<img
					src="/assets/svg/ic-arrow_right.svg"
					className="group-[.is-disabled]:filter-paginationOutline"
					alt=""
				/>
			</a>
		</div>
	)
}
