import React from "react"
import DropdownButton from "@/components/molecules/DropdownButton"
import DropdownMenu from "@/components/molecules/DropdownMenu"

export default function TopMenu() {
	const dropdownItem = [
		{
			name: 'Tutorial',
			menus: [
				{
					route: '#tutorialLink1',
					name: 'Kacang',
				},
				{
					route: '#tutorialLink2',
					name: 'Telur',
				},
				{
					route: '#tutorialLink3',
					name: 'Garuda',
				},
			]
		},
		{
			name: 'Web Development & Design',
			menus: [
				{
					route: '#DevelopmentLink1',
					name: 'Laravel',
				},
				{
					route: '#DevelopmentLink2',
					name: 'Figma',
				},
				{
					route: '#DevelopmentLink3',
					name: 'Sketch',
				},
				{
					route: '#DevelopmentLink4',
					name: 'React Native',
				},
			]
		},
		{
			name: 'Digital Marketing',
			menus: [
				{
					route: '#DigiLink1',
					name: 'OSS',
				},
				{
					route: '#DigiLink2',
					name: 'Ocean Link',
				},
				{
					route: '#DigiLink3',
					name: 'SEO',
				},
				{
					route: '#DigiLink4',
					name: 'Users',
				},
			]
		},
		{
			name: 'Insight Bisnis',
			menus: [
				{
					route: '#InsightLink1',
					name: 'Hot News',
				},
				{
					route: '#InsightLink2',
					name: 'Trend',
				},
				{
					route: '#InsightLink3',
					name: 'SEO',
				},
			]
		},
		{
			name: 'News & Updates',
			menus: [
				{
					route: '#UpdNewsLink1',
					name: 'Sport',
				},
				{
					route: '#UpdNewsLink2',
					name: 'Entertainment',
				},
			]
		},
	]
	return (
		<section className="bg-darkBlue p-3 relative z-10">
			<ul className="container text-white text-base font-semibold flex lg:items-center lg:justify-center flex-nowrap overflow-x-auto overflow-y-hidden gap-5 lg:gap-10">
				{
					dropdownItem.map((item, index) => {
						return (
							<li key={index}>
								<DropdownButton name={item.name} />
								<DropdownMenu menus={item.menus} dropdownName={item.name} />
							</li>
						)
					})
				}
			</ul>
		</section>
	)
}
