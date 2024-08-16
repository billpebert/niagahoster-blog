import React from "react"

export default function AccordionTableOfContent() {
	return (
		<div
			id="accordion-flush"
			className="p-8 border border-[#BFC5CC] rounded-[10px]"
			data-accordion="open"
			data-active-classes="text-slate-800"
			data-inactive-classes="text-dark"
		>
			<h2 id="accordion-flush-heading-1">
				<button
					type="button"
					className="flex items-center justify-between w-full font-bold text-xl text-left"
					data-accordion-target="#accordion-flush-body-1"
					aria-expanded="false"
					aria-controls="accordion-flush-body-1"
				>
					<span>Table of contents</span>
					<svg
						data-accordion-icon
						className="w-6 h-6 shrink-0"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						></path>
					</svg>
				</button>
			</h2>
			<div id="accordion-flush-body-1" className="mt-6 hidden" aria-labelledby="accordion-flush-heading-1">
				<div className="flex flex-col gap-2">
					<a href="#" className="text-sm font-semibold active:font-bold text-dark hover:text-hosterBlue py-3">
						Cara Cek IP Hosting
					</a>
					<ul className="ml-4 flex flex-col gap-3">
						<li>
							<a
								href="#"
								className="text-sm font-normal active:font-bold text-dark hover:text-hosterBlue"
							>
								Melihat IP Hosting pada email informasi akun hosting
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-sm font-normal active:font-bold text-dark hover:text-hosterBlue"
							>
								Melihat IP Hosting melalui Member Area Niagahoster
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-sm font-normal active:font-bold text-dark hover:text-hosterBlue"
							>
								Melihat IP Hosting melalui cPanel
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-sm font-normal active:font-bold text-dark hover:text-hosterBlue"
							>
								Melihat IP menggunakan CMD
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-sm font-normal active:font-bold text-dark hover:text-hosterBlue"
							>
								Melihat IP dengan web-based tools
							</a>
						</li>
					</ul>
					<a href="#" className="text-sm font-semibold active:font-bold text-dark hover:text-hosterBlue py-3">
						Kesimpulan
					</a>
				</div>
			</div>
		</div>
	)
}
