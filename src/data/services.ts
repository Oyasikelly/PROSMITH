export interface ServicesProps {
	id: number;
	name: string;
	link: string;
	img: string;
	description: string;
}

const servicesObj = [
	{
		id: 1,
		name: "Consulting",
		link: "/services/consulting",
		img: "/assets/services/test-img.jpg",
		description:
			"Expert guidance to help you make informed decisions and implement the right solutions for long-term success.",
	},
	{
		id: 2,
		name: "Solar Installation",
		link: "/services/solar-installation",
		img: "/assets/services/test-img.jpg",
		description:
			"Reliable solar energy systems designed and installed to power your home or business sustainably and efficiently.",
	},
	{
		id: 3,
		name: "Inverter Repairs",
		link: "/services/inverter-repair",
		img: "/assets/services/test-img.jpg",
		description:
			"Quick and dependable inverter repair services to keep your backup power running when you need it most.",
	},
	{
		id: 4,
		name: "StarLink Installation",
		link: "/services/starlink-installation",
		img: "/assets/services/test-img.jpg",
		description:
			"Professional Starlink setup for fast, stable internet access in even the most remote areas.",
	},
	{
		id: 5,
		name: "Electric Fencing",
		link: "/services/electric-fencing",
		img: "/assets/services/test-img.jpg",
		description:
			"High-quality electric fencing solutions that enhance your property’s security with reliable protection.",
	},
	{
		id: 6,
		name: "CCTV Installation",
		link: "/services/cctv-installation",
		img: "/assets/services/test-img.jpg",
		description:
			"Advanced surveillance systems to monitor, protect, and secure your home or business with confidence.",
	},
	{
		id: 7,
		name: "Network Cabling",
		link: "/services/network-cabling",
		img: "/assets/services/test-img.jpg",
		description:
			"Structured cabling solutions that ensure fast, reliable connectivity for offices, businesses, and homes.",
	},
	{
		id: 8,
		name: "Access Control Systems",
		link: "/services/access-control-systems",
		img: "/assets/services/test-img.jpg",
		description:
			"Smart access solutions to control and secure entry points, ensuring safety and convenience for your property.",
	},
	{
		id: 9,
		name: "Fire Alarm Systems",
		link: "/services/fire-alarm-systems",
		img: "/assets/services/test-img.jpg",
		description:
			"Trusted fire alarm systems that provide early detection and peace of mind for your safety.",
	},
	{
		id: 10,
		name: "Audio-Visual Solutions",
		link: "/services/audio-visual-solutions",
		img: "/assets/services/test-img.jpg",
		description:
			"Custom AV solutions for seamless presentations, events, and entertainment experiences.",
	},
	{
		id: 11,
		name: "Maintenance & Support",
		link: "/services/maintenance-support",
		img: "/assets/services/test-img.jpg",
		description:
			"Reliable maintenance and technical support to keep your systems running smoothly at all times.",
	},
	{
		id: 12,
		name: "Home Automation",
		link: "/services/home-automation",
		img: "/assets/services/test-img.jpg",
		description:
			"Smart home solutions that bring convenience, efficiency, and control to your everyday living.",
	},
];

export const services: ServicesProps[] = [...servicesObj];
