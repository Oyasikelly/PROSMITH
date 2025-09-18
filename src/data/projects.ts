export interface ProjectsProps {
	id: number;
	title: string;
	description: string;
	img: string;
	imageUrl: string;
	doneBy: string;
	for: string;
	location: string;
}
const projectsObj = [
	{
		id: 1,
		title: "Solar Panel Installation for Residential Homes",
		description:
			"Successfully installed solar panels for over 100 residential homes, reducing energy costs by an average of 30%.",
		img: "/assets/projects/test-img.jpg",
		imageUrl: "/assets/project1.jpg",
		doneBy: "Prosmith",
		for: "Mr Ovie",
		location: "Warri, Delta, Nigeria.",
	},
	{
		id: 2,
		title: "Commercial CCTV System Setup",
		description:
			"Designed and implemented a comprehensive CCTV system for a large commercial complex, enhancing security and monitoring capabilities.",
		img: "/assets/projects/test-img.jpg",
		imageUrl: "/assets/project2.jpg",
		doneBy: "Prosmith",
		for: "Mr Ovie",
		location: "Warri, Delta, Nigeria.",
	},
	{
		id: 3,
		title: "Network Cabling for Office Buildings",
		description:
			"Completed network cabling for multiple office buildings, ensuring high-speed connectivity and reliable communication infrastructure.",
		img: "/assets/projects/test-img.jpg",
		imageUrl: "/assets/project3.jpg",
		doneBy: "Prosmith",
		for: "Mr Ovie",
		location: "Warri, Delta, Nigeria.",
	},
];

export const projects: ProjectsProps[] = [...projectsObj];
