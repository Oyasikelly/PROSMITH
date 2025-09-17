export interface ProjectsProps {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
}
const projectsObj = [
	{
		id: 1,
		title: "Solar Panel Installation for Residential Homes",
		description:
			"Successfully installed solar panels for over 100 residential homes, reducing energy costs by an average of 30%.",
		imageUrl: "/assets/project1.jpg",
	},
	{
		id: 2,
		title: "Commercial CCTV System Setup",
		description:
			"Designed and implemented a comprehensive CCTV system for a large commercial complex, enhancing security and monitoring capabilities.",
		imageUrl: "/assets/project2.jpg",
	},
	{
		id: 3,
		title: "Network Cabling for Office Buildings",
		description:
			"Completed network cabling for multiple office buildings, ensuring high-speed connectivity and reliable communication infrastructure.",
		imageUrl: "/assets/project3.jpg",
	},
];

export const projects: ProjectsProps[] = [...projectsObj];
