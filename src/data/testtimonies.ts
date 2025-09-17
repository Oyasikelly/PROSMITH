export interface TestimonyProps {
	id: number;
	name: string;
	role: string;
	company: string;
	image: string;
	testimony: string;
}

const testimonyObjects: TestimonyProps[] = [
	{
		id: 1,
		name: "John Doe",
		role: "CEO",
		company: "Tech Innovations",
		image: "/assets/testimonials/test-img.jpg",
		testimony:
			"ProSmith transformed our business with their innovative solutions. Their team is professional, knowledgeable, and dedicated to delivering results.",
	},
	{
		id: 2,
		name: "Jane Smith",
		role: "Marketing Director",
		company: "Creative Solutions",
		image: "/assets/testimonials/test-img.jpg",

		testimony:
			"Working with ProSmith was a game-changer for our marketing strategy. Their insights and expertise helped us reach new heights.",
	},
	{
		id: 3,
		name: "Emily Johnson",
		role: "Product Manager",
		company: "NextGen Products",
		image: "/assets/testimonials/test-img.jpg",
		testimony:
			"The ProSmith team provided exceptional service and support throughout our project. Their attention to detail and commitment to excellence is unmatched.",
	},
	{
		id: 4,
		name: "Michael Brown",
		role: "CTO",
		company: "Innovatech",
		image: "/assets/testimonials/test-img.jpg",
		testimony:
			"ProSmith's technical expertise and innovative approach helped us overcome complex challenges. Their solutions are both effective and efficient.",
	},
	{
		id: 5,
		name: "Sarah Davis",
		role: "Operations Manager",
		company: "Global Enterprises",
		image: "/assets/testimonials/test-img.jpg",
		testimony:
			"ProSmith exceeded our expectations in every way. Their team is responsive, reliable, and truly cares about their clients' success.",
	},
];

export const testimonials: TestimonyProps[] = [...testimonyObjects];
