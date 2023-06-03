import React from "react"
import Badge from "../atom/Badge"

export default function ArticleDetail({ category, date, duration }) {
	return (
		<ul className="inline-flex">
			{category && (
				<li className="rounded-full px-4 py-[2px] bg-lightBlue first:before:content-[''] before:content-['•'] before:mx-3 first:before:mx-0 inline-flex items-center">
					<Badge name={category} />
				</li>
			)}
			{date && (
				<li className="first:before:content-[''] before:content-['•'] before:mx-3 first:before:mx-0 inline-flex items-center">
					<p className="text-xs leading-6">{date}</p>
				</li>
			)}
			{duration && (
				<li className="first:before:content-[''] before:content-['•'] before:mx-3 first:before:mx-0 inline-flex items-center">
					<p className="text-xs leading-6">{duration} min read</p>
				</li>
			)}
		</ul>
	)
}
