export interface ProjectProblem {
	projectId: number;
	problem: string;
	imageUrl: string;
}

export const projectProblems: ProjectProblem[] = [
	{
		projectId: 1,
		problem:
			"High electricity bills and frequent power outages made it difficult for homeowners to enjoy reliable energy, leading to discomfort and high expenses.",
		imageUrl: "assets/test-img.jpg",
	},
	{
		projectId: 2,
		problem:
			"The commercial complex had weak security monitoring, leaving blind spots and making it challenging to protect property and personnel effectively.",
		imageUrl: "assets/test-img.jpg",
	},
	{
		projectId: 3,
		problem:
			"Offices were experiencing poor connectivity and unreliable communication due to outdated cabling infrastructure.",
		imageUrl: "assets/test-img.jpg",
	},
];
