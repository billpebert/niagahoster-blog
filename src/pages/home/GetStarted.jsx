import React from "react"
import Button from "../../components/atom/Button"

export default function GetStarted() {
	return (
		<section className="bg-gradientBlue py-[92px] px-4 relative overflow-hidden">
			<div className="flex flex-col text-center relative z-10">
				<h4 className="mb-6 text-white font-bold text-[40px] leading-[56px] tracking-[-0.02em]">
					Awali Kesuksesan Anda Bersama Niagahoster
				</h4>
				<p className="text-base text-white tracking-[0.005em] opacity-[0.72] mb-[42px]">
					Kini tidak lagi sulit mewujudkan website impian. Performa hebat, keamanan ekstra, dan{" "}
					<br className="sr-only" /> layanan dukungan teknis yang bisa diandalkan - semua dengan harga terjangkau!
				</p>
				<div>
                    <Button label={'Mulai Sekarang'} route='https://niagahoster.co.id' target="_blank" className="shadow-yellow-1 max-w-[278px]" type={'primary'} />
				</div>
			</div>
			<img
				src="/assets/images/circular_ornament02.svg"
				className="absolute top-0 z-0 left-1/2 -translate-x-1/2"
				alt=""
			/>
		</section>
	)
}
