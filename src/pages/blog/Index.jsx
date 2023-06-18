import React from "react"
import PageInfo from "./PageInfo"
import SubscribeCard from "@/components/molecules/SubscribeCard"
import SectionHeading from "@/components/atom/SectionHeading"
import VerticalArticleCard from "@/components/organisms/VerticalArticleCard"
import TopMenu from "@/components/organisms/TopMenu"
import BlogThreadDrawer from "./BlogThreadDrawer"
import Breadcrumb from "@/components/atom/Breadcrumb"
import BlogActionButtons from "@/components/molecules/BlogActionButtons"
import AccordionTableOfContent from "@/components/molecules/AccordionTableOfContent"

export default function Index() {
	return (
		<>
			<div className="pt-20 pb-14">
				<TopMenu />
			</div>
			<div className="container grid grid-cols-12 gap-[30px]">
				<div className="col-span-3 w-full h-full">
					<PageInfo />
				</div>

				<main className="px-4 md:px-0 max-w-[635px] w-full mx-auto col-span-7" id="mainArticle">
					<div className="flex flex-col gap-9">
						{/* <!-- Breadcrumb --> */}
						<Breadcrumb links={[{"route": "#test", "title": "Home"}, {"route": "#tutorial", "title": "Tutorial"}, {"route": "#hosting", "title": "Hosting"}]} lastItem={'4+ Cara Mudah Cek IP Hosting Website'} />

						{/* <!-- Title & Detail --> */}
						<div className="flex flex-col gap-4">
							<h1 className="text-dark text-[40px] font-bold leading-[56px]">
								4+ Cara Mudah Cek IP Hosting Website
							</h1>

							<div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full text-slateGrey">
								{/* <!-- Article Detail --> */}
								<ul className="inline-flex">
									<li className="first:before:content-[''] before:content-['•'] before:leading-4 before:mx-3 first:before:mx-0 inline-flex items-center">
										{/* <!-- Author --> */}
										<div className="inline-flex gap-3 items-center">
											<img
												src="/assets/images/user-1.png"
												className="rounded-full"
												width="24"
												height="24"
												alt=""
											/>
											<p className="text-xs">Nida Regita F</p>
										</div>
									</li>
									<li className="first:before:content-[''] before:content-['•'] before:leading-4 before:mx-3 first:before:mx-0 inline-flex items-center">
										<p className="text-xs">28 Dec 2021</p>
									</li>
									<li className="first:before:content-[''] before:content-['•'] before:leading-4 before:mx-3 first:before:mx-0 inline-flex items-center">
										<p className="text-xs">5 min read</p>
									</li>
								</ul>

								{/* <!-- Action Button --> */}
								<BlogActionButtons like={321} replies={45} />
							</div>
						</div>

						{/* <!-- Thumbnail Image --> */}
						<img
							src="/assets/images/default-1.png"
							width="100%"
							height="338"
							className="w-full h-auto md:h-[338px] object-cover rounded-[10px]"
							id="articleThumbnail"
							alt=""
						/>

						<p className="text-lg !leading-8 tracking-[0.005em]">
							Anda ingin tahu cara cek IP hosting? Selamat, Anda berada di halaman yang tepat!
							<br />
							<br />
							IP hosting adalah barisan angka sebagai identitas unik dari suatu hosting website. Dengan IP
							tersebut, website Anda dapat dikenali dan diakses melalui jaringan internet.
							<br />
							<br />
							Saat Anda mengakses website, Anda memang tidak bisa melihat IP secara langsung. Alasannya,
							IP tersebut sudah diwakili oleh sebuah domain agar lebih mudah diingat.
							<br />
							<br />
							Kalau begitu, bagaimana cara mengetahui hosting IP suatu website? Yuk, simak panduan lengkap
							cara cek IP web hosting di bawah ini!
						</p>

						<AccordionTableOfContent/>

						<h3 className="text-[28px] leading-9 font-bold text-dark">Cara Cek IP Hosting</h3>

						<div className="!leading-8">
							<p className="text-lg tracking-[0.005em]">
								Anda dapat melakukan cek IP hosting dengan berbagai cara, diantaranya adalah:
							</p>
							<ul className="font-bold text-dark text-lg">
								<li className="ml-8 list-disc">Melihat IP Hosting pada Email Informasi Akun Hosting</li>
								<li className="ml-8 list-disc">Melihat IP Hosting Melalui Member Area Niagahoster</li>
								<li className="ml-8 list-disc">Melihat IP Hosting Melalui cPanel</li>
								<li className="ml-8 list-disc">Mengecek IP Menggunakan CMD</li>
								<li className="ml-8 list-disc"> Mengecek IP dengan Web-based Tools</li>
							</ul>
							<p className="text-lg !leading-8 tracking-[0.005em]">
								Nah, berikut ini penjelasan lengkapnya:
							</p>
						</div>

						<h3 className="text-[28px] leading-9 font-bold text-dark">
							1. Melihat IP Hosting pada Email Informasi Akun Hosting
						</h3>

						<p className="text-lg !leading-8 tracking-[0.005em]">
							Ketika Anda membeli layanan hosting, pihak penyedia hosting akan mengirimkan email berupa
							informasi detail akun hosting Anda. Pada email ini, Anda bisa cek IP di bagian Informasi
							Akun seperti ini:
						</p>

						<h3 className="text-[28px] leading-9 font-bold text-dark">Kesimpulan</h3>

						<p className="text-lg !leading-8 tracking-[0.005em]">
							Nah, itu dia beberapa cara yang bisa Anda coba untuk mengecek hosting IP website. Mulai dari
							melihat IP pada email yang dikirimkan ketika Anda berhasil melakukan order hosting hingga
							cek IP hosting dengan bantuan aplikasi website.
							<br />
							<br />
							IP hosting merupakan deretan angka yang tentu sulit untuk diingat. Itulah kenapa penggunaan
							domain website bisa solusi terbaik demi kemudahan. Namun, pastikan nama domain terbaik yang
							digunakan, ya.
							<br />
							<br />
							Untungnya, Anda bisa membeli domain unik dengan mudah dari penyedia hosting di Indonesia
							seperti Niagahoster.
							<br />
							<br />
							Bahkan, di Niagahoster, Anda bisa mendapatkan domain gratis jika berlangganan hosting di
							hampir semua paket yang ditawarkan dengan durasi tertentu.
							<br />
							<br />
							Tak hanya itu, Anda bisa juga menambahkan banyak domain pada akun hosting Anda berkat fitur
							Unlimited Addon Domain. Itu pun masih ditambah dengan SSL gratis yang bisa digunakan untuk
							menjaga keamanan website Anda.
							<br />
							<br />
							Menariknya, semua layanan tersebut bisa Anda dapatkan dengan harga mulai dari Rp21rb/bulan
							saja. Harga yang cukup murah untuk fitur canggih dan layanan berkualitas, bukan?
							<br />
							<br />
							Jadi, tunggu apa lagi? Yuk, dapatkan domain gratis dengan berlangganan web hosting
							Niagahoster sekarang!
						</p>

						<a href="#" className="block btn-outline-yellow w-full">
							Berlangganan Hosting Niagahoster Sekarang Juga!
						</a>

						{/* <!-- Action Button --> */}
						<BlogActionButtons like={321} replies={45} size="lg" />
					</div>
				</main>
			</div>

			<section className="container mb-20">
				<SubscribeCard />
			</section>

			<section className="py-20 bg-[#f5faff]">
				<div className="container">
					<SectionHeading title={"Baca Artikel Terkait"} className="mb-9 text-center" />
					<div className="grid md:grid-cols-4 gap-x-[30px] gap-y-14">
						<VerticalArticleCard
							userPhoto={"/assets/images/user-1.png"}
							userName={"Nida Regita F"}
							title={"4+ Cara Mudah Cek IP Hosting Website"}
							textContent={
								"Anda ingin tahu cara cek IP hosting? Selamat, Anda berada di halaman yang tepat! IP hosting adalah barisan angka sebagai identitas unik dari suatu hosting..."
							}
							category={"Hosting"}
							duration={"8"}
							thumbnail={"/assets/images/default-2.png"}
						/>
					</div>
				</div>
			</section>

			<BlogThreadDrawer />
		</>
	)
}
