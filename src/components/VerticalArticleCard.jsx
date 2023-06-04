import React from "react"
import UserAvatar from "./atom/UserAvatar"
import ArticleDetail from "./molecules/ArticleDetail"
import { Link } from "react-router-dom"

export default function VerticalArticleCard({
	userPhoto,
	userName,
	title,
	textContent,
	category,
	duration,
	thumbnail,
}) {
	return (
		<article className="flex flex-col gap-3">
			<Link to="/blog">
				<img src={thumbnail} className="rounded-[5px] object-cover w-full h-[136px] 2xl:h-[160px]" alt="" />
			</Link>
			{/* <!-- Author --> */}
			<UserAvatar avatar={userPhoto} username={userName} />{/* <!-- Article Preview --> */}
			<div className="w-full">
				<Link to="/blog" className="hover:text-hosterBlue hover:underline">
					<h4 className="text-base font-bold">{title}</h4>
				</Link>
				<p className="mt-2 text-[12px] text-slateGrey max-h-12 line-clamp-3 tracking-[0.02em] leading-4">
					{textContent}
				</p>
			</div>
			{/* <!-- Article Detail --> */}
			<ArticleDetail category={category} duration={duration} />
		</article>
	)
}
