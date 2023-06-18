import React from "react"
import Button from "@/components/atom/Button"

export default function SubscribeCard() {
	return (
		<div className="rounded-3xl bg-gradientBlue p-9 w-full flex flex-col md:flex-row gap-7 md:items-center mt-20 justify-between">
			<div className="max-w-[390px] w-full">
				<h4 className="text-2xl font-bold text-white">Ingin jadi yang pertama tau artikel terbaru kami?</h4>
				<p className="mt-6 text-lightBlue text-base">
					Kami akan mengirimkan pemberitahuan artikel terbaru kami melalui email Anda. Ingin mendapatkan
					pemberitahuan?
				</p>
			</div>
            <Button label={'Langganan Sekarang'} type={'primary'} className="shadow-yellow-1" />
		</div>
	)
}
