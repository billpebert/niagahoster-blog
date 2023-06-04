import React, { useEffect } from "react"

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
				pageSummary.classList.remove("-ml-[1000px]")
				pageSummary.classList.add("!opacity-100")
			} else {
				pageSummary.classList.remove("!opacity-100")
				pageSummary.classList.add("-ml-[1000px]")
			}

			// Show/Hide pageSummary action button
			if (window.scrollY > mainArticleBottom - window.innerHeight) {
				asideActionButton.classList.add("hidden")
			} else {
				asideActionButton.classList.remove("hidden")
			}
		}
		window.addEventListener("scroll", scrollEffect)

		return () => window.removeEventListener('scroll', scrollEffect)
	}, [])

	return (
		<section
			className="pt-24 pr-9 w-full max-w-[255px] sticky top-12 -ml-[1000px] transition-all opacity-0 select-none"
			id="pageDetailSummary"
		>
			<div className="flex flex-col gap-4 pb-6 border-b border-paginationOutline">
				{/* <!-- Breadcrumb --> */}
				<ul className="inline-flex items-center">
					<li className="text-xs text-slateGrey after:content-[url('/assets/svg/ic-arrow_right-16x16.svg')] after:w-4 after:h-4 after:mx-[6px] last:after:content-none last:after:mx-0 inline-flex items-center">
						<a href="#" className="text-hosterBlue hover:text-darkBlue">
							Home
						</a>
					</li>
					<li className="text-xs text-slateGrey after:content-[url('/assets/svg/ic-arrow_right-16x16.svg')] after:w-4 after:h-4 after:mx-[6px] last:after:content-none last:after:mx-0 inline-flex items-center">
						<a href="#" className="text-hosterBlue hover:text-darkBlue">
							Tutorial
						</a>
					</li>
					<li className="text-xs text-slateGrey after:content-[url('/assets/svg/ic-arrow_right-16x16.svg')] after:w-4 after:h-4 after:mx-[6px] last:after:content-none last:after:mx-0 inline-flex items-center">
						<a href="#" className="text-hosterBlue hover:text-darkBlue">
							Hosting
						</a>
					</li>
				</ul>
				<h2 className="text-dark text-xl font-bold">4+ Cara Mudah Cek IP Hosting Website</h2>

				{/* <!-- Article Detail --> */}
				{/* <!-- Author --> */}
				<div className="inline-flex gap-3 items-center">
					<img src="/assets/images/user-1.png" className="rounded-full" width="24" height="24" alt="" />
					<p className="text-xs leading-5">Nida Regita F</p>
				</div>
				<ul className="inline-flex text-slateGrey">
					<li className="first:before:content-[''] before:content-['•'] before:mx-3 first:before:mx-0 inline-flex items-center">
						<p className="text-xs leading-6">28 Dec 2021</p>
					</li>
					<li className="first:before:content-[''] before:content-['•'] before:mx-3 first:before:mx-0 inline-flex items-center">
						<p className="text-xs leading-6">5 min read</p>
					</li>
				</ul>
			</div>

			{/* <!-- Action Button --> */}
			<div className="inline-flex items-center gap-6 text-slateGrey pt-6" id="asideActionButton">
				<a href="#" className="inline-flex items-center gap-3 hover:opacity-50">
					<img src="/assets/svg/ic-thumb_up.svg" alt="" />
					<p className="font-semibold text-xs">111</p>
				</a>
				<button type="button" className="inline-flex items-center gap-3 hover:opacity-50" data-open-thread>
					<img src="/assets/svg/ic-comment.svg" alt="" />
					<p className="font-semibold text-xs">4</p>
				</button>
				<a href="#" className="inline-flex items-center gap-3 hover:opacity-50">
					<img src="/assets/svg/ic-share.svg" alt="" />
					<p className="font-semibold text-xs">Share</p>
				</a>
			</div>
		</section>
	)
}
