import React from "react"
import TopMenu from "@/components/organisms/TopMenu"
import Header from "@/pages/home/Header"
import AsideCategory from "@/pages/home/AsideCategory"
import SectionHeading from "@/components/atom/SectionHeading"
import HorizontalArticleCard from "@/components/organisms/HorizontalArticleCard"
import Button from "@/components/atom/Button"
import SubscribeCard from "@/components/molecules/SubscribeCard"
import VerticalArticleCard from "@/components/organisms/VerticalArticleCard"
import Pagination from "@/components/molecules/Pagination"
import GetStarted from "@/pages/home/GetStarted"

export default function Index() {
	return (
		<>
			<div className="bg-gradientBlue relative pt-20">
				<TopMenu />
				<Header />
				{/* <!-- ornament --> */}
				<img
					src="/assets/images/circular_ornament01.svg"
					alt=""
					className="absolute top-0 left-1/2 -translate-x-1/2 z-0"
				/>
			</div>

			<main className="container">
				<div className="grid md:grid-cols-12 gap-[30px] 2xl:px-[125px] py-20 relative">
					<div className="col-span-9 gap-16 flex flex-col">
						<section className="flex flex-col gap-[36px]">
							<SectionHeading title={"Artikel Terbaru"} icon={"ic-electric"} />
							<div className="flex flex-col gap-12">
								<HorizontalArticleCard
									userPhoto={"/assets/images/user-1.png"}
									userName={"Nida Regita F"}
									title={"4+ Cara Mudah Cek IP Hosting Website"}
									textContent={
										"Anda ingin tahu cara cek IP hosting? Selamat, Anda berada di halaman yang tepat! IP hosting adalah barisan angka sebagai identitas unik dari suatu hosting..."
									}
									category={"Hosting"}
									duration={"8"}
									date={"28 Dec 2022"}
									thumbnail={"/assets/images/default-1.png"}
								/>
							</div>
							<div className="text-center">
								<Button label={"Lihat Semua Artikel"} type={"text"} />
							</div>
						</section>
						<section className="flex flex-col gap-[36px]">
							<SectionHeading title={"Artikel Populer"} icon={"ic-fire"} />
							<div className="flex flex-col gap-12">
								<HorizontalArticleCard
									userPhoto={"/assets/images/user-1.png"}
									userName={"Nida Regita F"}
									title={"4+ Cara Mudah Cek IP Hosting Website"}
									textContent={
										"Anda ingin tahu cara cek IP hosting? Selamat, Anda berada di halaman yang tepat! IP hosting adalah barisan angka sebagai identitas unik dari suatu hosting..."
									}
									category={"Hosting"}
									duration={"8"}
									date={"28 Dec 2022"}
									thumbnail={"/assets/images/default-1.png"}
								/>
							</div>
							<div className="text-center">
								<Button label={"Lihat Semua Artikel"} type={"text"} />
							</div>
						</section>

						<SubscribeCard />

						<section className="flex flex-col gap-[36px] mt-16">
							<SectionHeading title={"Semua Artikel"} />
							<div className="grid md:grid-cols-3 gap-x-[30px] gap-y-14">
								<VerticalArticleCard
									userPhoto={"/assets/images/user-1.png"}
									userName={"Nida Regita F"}
									title={"4+ Cara Mudah Cek IP Hosting Website"}
									textContent={
										"Anda ingin tahu cara cek IP hosting? Selamat, Anda berada di halaman yang tepat! IP hosting adalah barisan angka sebagai identitas unik dari suatu hosting..."
									}
									category={"Hosting"}
									duration={"8"}
									thumbnail={"/assets/images/default-1.png"}
								/>
							</div>
							<Pagination />
						</section>
					</div>
					<div className="col-span-3">
						<AsideCategory />
					</div>
				</div>
			</main>

			<GetStarted />
		</>
	)
}
