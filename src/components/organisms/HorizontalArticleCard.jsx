import React from "react"
import UserAvatar from "@/components/atom/UserAvatar"
import ArticleDetail from "@/components/molecules/ArticleDetail"
import { Link } from "react-router-dom"

export default function HorizontalArticleCard({userPhoto, userName, title, textContent, category, date, duration, thumbnail}) {
	return (
		<article className="flex gap-8 lg:gap-[60px]">
			<div className="flex flex-col gap-4 max-w-[510px] w-full">
				{/* <!-- Author --> */}
                <UserAvatar avatar={userPhoto} username={userName}/>
				{/* <!-- Article Preview --> */}
				<div>
					<Link to="/blog" className="hover:text-hosterBlue hover:underline">
						<h4 className="text-base font-bold">{title}</h4>
					</Link>
					<p className="mt-2 text-[12px] text-slateGrey max-h-9 line-clamp-3 md:line-clamp-2 tracking-[0.02em]">
						{textContent}
					</p>
				</div>
				{/* <!-- Article Detail --> */}
                <ArticleDetail category={category} date={date} duration={duration} />
			</div>
			<Link to="/blog" className="w-fit">
				<img
					src={thumbnail}
					className="rounded-[5px] object-cover lg:min-w-[255px] w-[255px] h-[164px] ml-auto"
					alt=""
				/>
			</Link>
		</article>
	)
}
