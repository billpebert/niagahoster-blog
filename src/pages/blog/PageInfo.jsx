import React, { useEffect } from "react"
import Breadcrumb from "@/components/atom/Breadcrumb"
import BlogActionButtons from "@/components/molecules/BlogActionButtons"

export default function PageInfo() {
	useEffect(() => {
		let pageSummary = document.getElementById("pageDetailSummary")
		let mainArticle = document.getElementById("mainArticle")
		let coverThumbnail = document.getElementById("articleThumbnail")
		let mainArticleBottom = mainArticle.offsetTop + mainArticle.offsetHeight
		let asideActionButton = document.getElementById("asideActionButton")
		const scrollEffect = () => {
			// Page summary scroll effect
			if (window.scrollY > coverThumbnail.offsetTop + 300) {
				// Show
				pageSummary.classList.remove('hidden')
				pageSummary.classList.add('block')
				setTimeout(() => {
					pageSummary.classList.add("!opacity-100")
				}, 300);
			} else {
				// Hide
				pageSummary.classList.remove("!opacity-100")
				setTimeout(() => {
					pageSummary.classList.remove('block')
					pageSummary.classList.add('hidden')
				}, 300);
			}

			// Show/Hide pageSummary action button
			if (window.scrollY > mainArticleBottom - window.innerHeight) {
				// Hide
				asideActionButton.classList.add("!opacity-0")
				setTimeout(() => {
					asideActionButton.classList.add("hidden")
				}, 300);
			} else {
				// Show
				asideActionButton.classList.remove("hidden")
				setTimeout(() => {
					asideActionButton.classList.remove("!opacity-0")
				}, 300);
			}
		}
		window.addEventListener("scroll", scrollEffect)

		return () => window.removeEventListener('scroll', scrollEffect)
	}, [])

	return (
		<section
			className="pt-24 pr-9 w-full max-w-[255px] sticky top-12 transition-all ease-in-out duration-300 opacity-0 select-none"
			id="pageDetailSummary"
		>
			<div className="flex flex-col gap-4 pb-6 border-b border-paginationOutline">
				{/* <!-- Breadcrumb --> */}
				<Breadcrumb links={[{"route": "#test", "title": "Home"}, {"route": "#tutorial", "title": "Tutorial"}, {"route": "#hosting", "title": "Hosting"}]}/>
				<h2 className="text-dark text-xl font-bold">4+ Cara Mudah Cek IP Hosting Website</h2>

				{/* <!-- Article Detail --> */}
				{/* <!-- Author --> */}
				<div className="inline-flex gap-3 items-center">
					<img src="/assets/images/user-1.png" className="rounded-full" width="24" height="24" alt="" />
					<p className="text-xs">Nida Regita F</p>
				</div>
				<ul className="inline-flex text-slateGrey">
					<li className="first:before:content-[''] before:content-['•'] before:leading-4 before:mx-3 first:before:mx-0 inline-flex items-center">
						<p className="text-xs">28 Dec 2021</p>
					</li>
					<li className="first:before:content-[''] before:content-['•'] before:leading-4 before:mx-3 first:before:mx-0 inline-flex items-center">
						<p className="text-xs">5 min read</p>
					</li>
				</ul>
			</div>

			{/* <!-- Action Button --> */}
			<BlogActionButtons className="pt-6 transition-all opacity-100" id="asideActionButton" like={321} replies={45} />
		</section>
	)
}
