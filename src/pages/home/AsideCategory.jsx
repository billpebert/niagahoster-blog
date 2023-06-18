import React from "react"
import Input from "@/components/atom/Input"

export default function AsideCategory() {
	return (
		<aside className="sticky top-24">
			<div className="w-full mb-9">
				<Input type={'text'} searchIcon={true} placeholder={'Cari artikel blog . . .'} />
			</div>
			<div className="flex flex-col p-4">
				<p className="font-bold text-lg tracking-[0.005em] mb-6">Kategori Blog</p>

				<div
					id="accordion-flush"
					data-accordion="collapse"
					data-active-classes="text-gray-500"
					data-inactive-classes="text-dark"
				>
					<h2 id="accordion-flush-heading-1">
						<button
							type="button"
							className="flex items-center justify-between w-full py-4 font-semibold text-sm text-left"
							data-accordion-target="#accordion-flush-body-1"
							aria-expanded="false"
							aria-controls="accordion-flush-body-1"
						>
							<span>Tutorial</span>
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
					<div id="accordion-flush-body-1" className="hidden" aria-labelledby="accordion-flush-heading-1">
						<div className="pb-4 border-b border-paginationOutline flex flex-col gap-2">
							<a
								href="#"
								className="text-sm font-medium text-gray-500 ml-5 hover:text-hosterBlue hover:underline"
							>
								Item
							</a>
							<a
								href="#"
								className="text-sm font-medium text-gray-500 ml-5 hover:text-hosterBlue hover:underline"
							>
								Item
							</a>
							<a
								href="#"
								className="text-sm font-medium text-gray-500 ml-5 hover:text-hosterBlue hover:underline"
							>
								Item
							</a>
						</div>
					</div>
					<h2 id="accordion-flush-heading-2">
						<button
							type="button"
							className="flex items-center justify-between w-full py-4 font-semibold text-sm text-left"
							data-accordion-target="#accordion-flush-body-2"
							aria-expanded="false"
							aria-controls="accordion-flush-body-2"
						>
							<span>Digital Marketing</span>
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
					<div id="accordion-flush-body-2" className="hidden" aria-labelledby="accordion-flush-heading-2">
						<div className="pb-4 border-b border-paginationOutline flex flex-col gap-2">
							<a
								href="#"
								className="text-sm font-medium text-gray-500 ml-5 hover:text-hosterBlue hover:underline"
							>
								Item
							</a>
							<a
								href="#"
								className="text-sm font-medium text-gray-500 ml-5 hover:text-hosterBlue hover:underline"
							>
								Item
							</a>
							<a
								href="#"
								className="text-sm font-medium text-gray-500 ml-5 hover:text-hosterBlue hover:underline"
							>
								Item
							</a>
						</div>
					</div>
					<h2 id="accordion-flush-heading-3">
						<button
							type="button"
							className="flex items-center justify-between w-full py-4 font-semibold text-sm text-left"
							data-accordion-target="#accordion-flush-body-3"
							aria-expanded="false"
							aria-controls="accordion-flush-body-3"
						>
							<span>Web Development & Design</span>
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
					<div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
						<div className="pb-4 border-b border-paginationOutline flex flex-col gap-2">
							<a
								href="#"
								className="text-sm font-medium text-gray-500 ml-5 hover:text-hosterBlue hover:underline"
							>
								Item
							</a>
							<a
								href="#"
								className="text-sm font-medium text-gray-500 ml-5 hover:text-hosterBlue hover:underline"
							>
								Item
							</a>
							<a
								href="#"
								className="text-sm font-medium text-gray-500 ml-5 hover:text-hosterBlue hover:underline"
							>
								Item
							</a>
						</div>
					</div>
					<h2 id="accordion-flush-heading-3">
						<button
							type="button"
							className="flex items-center justify-between w-full py-4 font-semibold text-sm text-left"
							data-accordion-target="#accordion-flush-body-3"
							aria-expanded="false"
							aria-controls="accordion-flush-body-3"
						>
							<span>Insight Bisnis</span>
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
					<div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
						<div className="pb-4 border-b border-paginationOutline flex flex-col gap-2">
							<a
								href="#"
								className="text-sm font-medium text-gray-500 ml-5 hover:text-hosterBlue hover:underline"
							>
								Item
							</a>
							<a
								href="#"
								className="text-sm font-medium text-gray-500 ml-5 hover:text-hosterBlue hover:underline"
							>
								Item
							</a>
							<a
								href="#"
								className="text-sm font-medium text-gray-500 ml-5 hover:text-hosterBlue hover:underline"
							>
								Item
							</a>
						</div>
					</div>
					<h2 id="accordion-flush-heading-3">
						<button
							type="button"
							className="flex items-center justify-between w-full py-4 font-semibold text-sm text-left"
							data-accordion-target="#accordion-flush-body-3"
							aria-expanded="false"
							aria-controls="accordion-flush-body-3"
						>
							<span>News & Update</span>
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
					<div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
						<div className="pb-4 border-b border-paginationOutline flex flex-col gap-2">
							<a
								href="#"
								className="text-sm font-medium text-gray-500 ml-5 hover:text-hosterBlue hover:underline"
							>
								Item
							</a>
							<a
								href="#"
								className="text-sm font-medium text-gray-500 ml-5 hover:text-hosterBlue hover:underline"
							>
								Item
							</a>
							<a
								href="#"
								className="text-sm font-medium text-gray-500 ml-5 hover:text-hosterBlue hover:underline"
							>
								Item
							</a>
						</div>
					</div>
				</div>
			</div>
		</aside>
	)
}
