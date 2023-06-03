import React from "react"

export default function SectionHeading({ title, icon }) {
	return (
		<h3 className="inline-flex gap-4 items-center text-[32px] leading-[42px] font-bold text-dark">
			{icon && <img src={`/assets/svg/${icon}.svg`} width="44" height="44" alt="" />}
			{title}
		</h3>
	)
}
