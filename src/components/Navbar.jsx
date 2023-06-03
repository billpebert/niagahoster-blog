import { useEffect, useState } from "react"
import Button from "./atom/Button"

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	function scrollEffectBackground() {
		const navElement = document.getElementById("navigationBar")
		// console.log(window.innerWidth)
		if (window.pageYOffset > 80) {
			navElement.classList.add("lg:bg-gradientBlue")
			navElement.classList.remove("lg:bg-transparent")
		} else {
			navElement.classList.remove("lg:bg-gradientBlue")
			navElement.classList.add("lg:bg-transparent")
		}
	}

	useEffect(() => {
		document.addEventListener("scroll", scrollEffectBackground)
	}, [])

	return (
		<>
			<nav
				className="py-[22px] text-white fixed w-full z-20 top-0 bg-gradientBlue lg:bg-transparent"
				id="navigationBar"
			>
				<div className="container flex flex-col lg:flex-row gap-8 w-full">
					<div className="inline-flex justify-between">
						<a href="">
							<img src="/assets/images/logo-navbar.svg" alt="" />
						</a>
						<button
							className="block lg:hidden"
							id="navToggler"
							onClick={() => setIsOpen((state) => !state)}
						>
							<img src="/assets/svg/ic-menu.svg" width="24" height="24" alt="" />
						</button>
					</div>
					{/* <!-- NavLinks --> */}
					<div className={isOpen ? "lg:block w-full" : "hidden lg:block w-full"} id="niaga-navs">
						<section className="flex flex-col lg:flex-row lg:items-center w-full gap-4 lg:gap-0">
							<div className="flex flex-col lg:flex-row gap-4 lg:gap-10 lg:items-center font-semibold text-base lg:ml-auto">
								<a href="">Hosting</a>
								<a href="">VPS</a>
								<a href="">Domain</a>
								<a href="">Website</a>
								<a href="">Kemitraan</a>
								<a href="">Wawasan</a>
								<a href="">Acara</a>
							</div>
							<div className="flex flex-col lg:flex-row gap-4 lg:items-center font-semibold text-base lg:ml-auto">
								<a href="">
									<img src="/assets/svg/ic-cart.svg" width="18" height="19" alt="" />
								</a>
								<a
									href=""
									className="inline-flex after:content-[url('/assets/svg/ic-arrow_down.svg')] after:ml-[2px] after:max-h-[24px]"
								>
									ID
								</a>
								<Button label={'Login'} type={'outline'}/>
							</div>
						</section>
					</div>
				</div>
			</nav>
		</>
	)
}
