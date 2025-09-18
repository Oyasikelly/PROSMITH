export interface ProjectSolution {
	projectId: number;
	solution: string;
	imageUrl: string;
}

export const projectSolutions: ProjectSolution[] = [
	{
		projectId: 1,
		solution:
			"Installed modern solar panels with high efficiency, reducing electricity bills by up to 30% while providing reliable, eco-friendly power supply.",
		imageUrl: "/assets/test-img.jpg",
	},
	{
		projectId: 2,
		solution:
			"Designed and deployed a complete CCTV network with remote monitoring capabilities, ensuring 24/7 surveillance and improved security for the complex.",
		imageUrl: "/assets/test-img.jpg",
	},
	{
		projectId: 3,
		solution:
			"Installed structured network cabling with high-speed data capacity, delivering reliable connectivity and improving office communication systems.",
		imageUrl: "/assets/test-img.jpg",
	},
];
