import { Drawer } from "flowbite"
import React, { useEffect } from "react"

export default function BlogThreadDrawer() {
	
	useEffect(() => {
		let textareaComment = document.querySelector('textarea#comment')
		let commentActionButton = document.getElementById('formCommentButton')
	
		const $targetEl = document.getElementById('drawer-comments-replies')
		const drawerConfig = {
			placement: 'right',
			backdrop: true,
			bodyScrolling: false,
			edge: false,
			edgeOffset: '',
			backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30'
		}
	
		const drawer = new Drawer($targetEl, drawerConfig)
		let openThreadComments = document.querySelectorAll('[data-open-thread]');
		Array.from(openThreadComments).forEach(link => {
			link.addEventListener('click', function (event) {
				drawer.show()
			});
		});
	
		document.getElementById('closeCommentThread').addEventListener('click', () => {
			drawer.hide()
		})

        textareaComment.addEventListener('input', (e) => {
            if (e.target.value != '') {
                commentActionButton.classList.remove('hidden')
                commentActionButton.classList.add('inline-flex')
            } else {
                commentActionButton.classList.add('hidden')
                commentActionButton.classList.remove('inline-flex')
            }
        })
	}, [])

	return (
		<aside
			id="drawer-comments-replies"
			className="fixed top-0 right-0 z-40 h-screen overflow-y-auto transition-transform translate-x-full bg-white w-[355px] py-9 shadow-[-8px_0_32px_rgba(0,87,178,0.16)]"
			tabIndex="-1"
			aria-labelledby="drawer-right-label"
		>
			{/* <!-- Header --> */}
			<div className="relative w-full inline-flex justify-between items-center px-[30px]">
				<h5 id="drawer-right-label" className="inline-flex items-center text-dark text-xl font-bold gap-3">
					<img src="/assets/svg/ic-comment.svg" alt="" />
					Balasan
					<span className="text-hosterBlue">15</span>
				</h5>
				{/* <!-- Button close drawer --> */}
				<button
					type="button"
					aria-controls="drawer-comments-replies"
					id="closeCommentThread"
					className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center"
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M13.4099 11.9999L19.7099 5.70994C19.8982 5.52164 20.004 5.26624 20.004 4.99994C20.004 4.73364 19.8982 4.47825 19.7099 4.28994C19.5216 4.10164 19.2662 3.99585 18.9999 3.99585C18.7336 3.99585 18.4782 4.10164 18.2899 4.28994L11.9999 10.5899L5.70994 4.28994C5.52164 4.10164 5.26624 3.99585 4.99994 3.99585C4.73364 3.99585 4.47824 4.10164 4.28994 4.28994C4.10164 4.47825 3.99585 4.73364 3.99585 4.99994C3.99585 5.26624 4.10164 5.52164 4.28994 5.70994L10.5899 11.9999L4.28994 18.2899C4.19621 18.3829 4.12182 18.4935 4.07105 18.6154C4.02028 18.7372 3.99414 18.8679 3.99414 18.9999C3.99414 19.132 4.02028 19.2627 4.07105 19.3845C4.12182 19.5064 4.19621 19.617 4.28994 19.7099C4.3829 19.8037 4.4935 19.8781 4.61536 19.9288C4.73722 19.9796 4.86793 20.0057 4.99994 20.0057C5.13195 20.0057 5.26266 19.9796 5.38452 19.9288C5.50638 19.8781 5.61698 19.8037 5.70994 19.7099L11.9999 13.4099L18.2899 19.7099C18.3829 19.8037 18.4935 19.8781 18.6154 19.9288C18.7372 19.9796 18.8679 20.0057 18.9999 20.0057C19.132 20.0057 19.2627 19.9796 19.3845 19.9288C19.5064 19.8781 19.617 19.8037 19.7099 19.7099C19.8037 19.617 19.8781 19.5064 19.9288 19.3845C19.9796 19.2627 20.0057 19.132 20.0057 18.9999C20.0057 18.8679 19.9796 18.7372 19.9288 18.6154C19.8781 18.4935 19.8037 18.3829 19.7099 18.2899L13.4099 11.9999Z"
							fill="#29384E"
						/>
					</svg>

					<span className="sr-only">Close menu</span>
				</button>
			</div>
			<form action="" className="pb-6 border-b border-paginationOutline mt-6 px-[30px]">
				<textarea
					name="comment"
					id="comment"
					rows="5"
					className="text-sm bg-white rounded-[14px] p-[14px] outline-none border border-[#00183329] text-dark w-full focus:ring-hosterBlue focus:ring-2 disabled:bg-[#F3F4F6] placeholder:text-grey"
					placeholder="Write a comment"
				></textarea>
				<div className="hidden justify-end items-center gap-3 mt-6 w-full" id="formCommentButton">
					<button type="button" className="text-sm text-hosterBlue py-3 px-6 font-bold">
						Cancel
					</button>
					<button type="button" className="btn-yellow shadow-yellow-1 !text-sm !px-6">
						Comment
					</button>
				</div>
			</form>

			{/* <!-- Replies section --> */}
			<section className="px-[30px]">
				<article className="relative py-6 border-b border-paginationOutline last:border-transparent flex flex-col gap-3">
					{/* <!-- User --> */}
					<div className="inline-flex gap-3 items-center">
						<img
							src="/assets/images/user-2.png"
							className="rounded-full w-10 h-10 object-cover"
							alt=""
						/>
						<div>
							<h6 className="text-base font-semibold text-dark inline-flex gap-3 items-center">
								Adam Muiz
								{/* <!-- if author --> */}
								{/* <!-- <span>•</span>
                        <span className="text-xs text-hosterBlue">Author</span> --> */}
							</h6>
							<p className="text-[#7F8895] text-xs">28 hari yang lalu</p>
						</div>
					</div>
					<p className="text-[14px] leading-[24px] text-dark break-words tracking-[0.005em]">
						makasih kak udah berbagi informasi hehe
					</p>
					<div className="inline-flex gap-2 items-center w-full">
						<a href="#" className="inline-flex items-center gap-1 hover:opacity-50">
							<img src="/assets/svg/ic-thumb_up.svg" alt="" />
							{/* <!-- <span className="text-slateGrey text-xs font-semibold">1</span> --> */}
						</a>
						<a href="#" className="inline-flex items-center gap-1 hover:opacity-50">
							<img src="/assets/svg/ic-arrow_reply.svg" alt="" />
							{/* <!-- <span className="text-slateGrey text-xs font-semibold">1</span> --> */}
						</a>
						<button type="button" className="text-hosterBlue text-sm font-bold ml-auto hidden" id="hideReplies">
							Sembunyikan Balasan
						</button>
					</div>
				</article>
				<article className="relative py-6 border-b border-paginationOutline last:border-transparent flex flex-col gap-3">
					{/* <!-- User --> */}
					<div className="inline-flex gap-3 items-center">
						<img
							src="/assets/images/user-2.png"
							className="rounded-full w-10 h-10 object-cover"
							alt=""
						/>
						<div>
							<h6 className="text-base font-semibold text-dark inline-flex gap-3 items-center">
								Adam Muiz
								{/* <!-- if author --> */}
								{/* <!-- <span>•</span>
                        <span className="text-xs text-hosterBlue">Author</span> --> */}
							</h6>
							<p className="text-[#7F8895] text-xs">18 hari yang lalu</p>
						</div>
					</div>
					<p className="text-[14px] leading-[24px] text-dark break-words tracking-[0.005em]">
						Lagi coba host-tracker trial 30 day, bisa mantau uptime webiste, cukup membantu. Sebenarnya
						kalau mantau juga bisa pakai JetPack, cuma karena berhubung pluginnya berat jadi cari alternatif
						lain buat pantau.
					</p>
					<div className="inline-flex gap-2 items-center w-full">
						<a href="#" className="inline-flex items-center gap-1 hover:opacity-50">
							<img src="/assets/svg/ic-thumb_up.svg" alt="" />
							{/* <!-- <span className="text-slateGrey text-xs font-semibold">1</span> --> */}
						</a>
						<a href="#" className="inline-flex items-center gap-1 hover:opacity-50">
							<img src="/assets/svg/ic-arrow_reply.svg" alt="" />
							{/* <!-- <span className="text-slateGrey text-xs font-semibold">1</span> --> */}
						</a>
						<button type="button" className="text-hosterBlue text-sm font-bold ml-auto hidden" id="hideReplies">
							Sembunyikan Balasan
						</button>
					</div>
				</article>
				<article className="relative py-6 border-b border-paginationOutline last:border-transparent flex flex-col gap-3">
					{/* <!-- User --> */}
					<div className="inline-flex gap-3 items-center">
						<img
							src="/assets/images/user-2.png"
							className="rounded-full w-10 h-10 object-cover"
							alt=""
						/>
						<div>
							<h6 className="text-base font-semibold text-dark inline-flex gap-3 items-center">
								Adam Muiz
								{/* <!-- if author --> */}
								{/* <!-- <span>•</span>
                        <span className="text-xs text-hosterBlue">Author</span> --> */}
							</h6>
							<p className="text-[#7F8895] text-xs">18 hari yang lalu</p>
						</div>
					</div>
					<p className="text-[14px] leading-[24px] text-dark break-words tracking-[0.005em]">
						kalau untuk cek kesehatan websitenya sendiri bagaimana gan ?
					</p>
					<div className="inline-flex gap-2 items-center w-full">
						<a href="#" className="inline-flex items-center gap-1 hover:opacity-50">
							<img src="/assets/svg/ic-thumb_up.svg" alt="" />
							{/* <!-- <span className="text-slateGrey text-xs font-semibold">1</span> --> */}
						</a>
						<a href="#" className="inline-flex items-center gap-1 hover:opacity-50">
							<img src="/assets/svg/ic-arrow_reply.svg" alt="" />
							<span className="text-slateGrey text-xs font-semibold">1</span>
						</a>
						<button type="button" className="text-hosterBlue text-sm font-bold ml-auto" id="hideReplies3">
							Sembunyikan Balasan
						</button>
					</div>

					{/* <!-- Member replies --> */}
					<div className="ml-3 border-l-2 border-hosterBlue pl-6 flex flex-col gap-3" id="userReplies3">
						{/* <!-- User --> */}
						<div className="inline-flex gap-3 items-center">
							<img
								src="/assets/images/user-2.png"
								className="rounded-full w-10 h-10 object-cover"
								alt=""
							/>
							<div>
								<h6 className="text-base font-semibold text-dark inline-flex gap-3 items-center">
									Adam Muiz
									{/* <!-- if author --> */}
									<span>•</span>
									<span className="text-xs text-hosterBlue">Author</span>
								</h6>
								<p className="text-[#7F8895] text-xs">3 hari yang lalu</p>
							</div>
						</div>
						<p className="text-[14px] leading-[24px] text-dark break-words tracking-[0.005em]">
							Bisa melakukan pengecekan melalui Urlvoid atau fitur secamanya, bisa juga melalui google di
							url{" "}
							<a href="#" className="text-hosterBlue">
								http://www.google.com/safebrowsing/diagnostic?site=namasiteanda
							</a>
						</p>
					</div>
				</article>
			</section>
		</aside>
	)
}
