import React from "react"

export default function Header() {
	return (
		<header className="container p-[64px_0_78px] flex flex-col items-center w-full relative z-10">
			<h1 className="text-[56px] leading-[64px] font-bold text-white text-center">
				Dapatkan Artikel <br />
				<div id="flip">
					<div>
						<span>Tutorial Design Website</span>
					</div>
					<div>
						<span>Tutorial Marketing</span>
					</div>
					<div>
						<span>Tutorial Website</span>
					</div>
					<div>
						<span>Tutorial Hosting</span>
					</div>
				</div>
				Terbaik Disini
			</h1>
			<p className="text-base text-[#F5FAFF] mt-8 mb-[60px] text-center">
				Temukan artikel berisi solusi terbaik untuk segala permasalahan Anda
			</p>
			<div className="max-w-[540px] w-full">
				<input
					type="text"
					className="text-base bg-white rounded-full px-8 py-3 outline-none border border-[#00183329] text-dark w-full bg-icSearch bg-no-repeat bg-[calc(100%-32px)_center] focus:ring-hosterBlue focus:ring-2 disabled:bg-[#F3F4F6] disabled:bg-icSearchDisabled focus:bg-icSearchFocus placeholder:text-grey"
					placeholder="Cari topic artikel yang ingin Anda cari . . ."
				/>
			</div>
		</header>
	)
}
