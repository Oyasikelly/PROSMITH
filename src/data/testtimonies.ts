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
			"Prosmith installed a solar system in my home, and the results have been amazing. My energy bills have dropped significantly, and the service was top-notch.",
	},
	{
		id: 2,
		name: "Jane Smith",
		role: "Marketing Director",
		company: "Creative Solutions",
		image: "/assets/testimonials/test-img.jpg",

		testimony:
			"Working with Prosmith was a game-changer for our business. Their team provided a reliable backup power solution that keeps us running even during outages.",
	},
	{
		id: 3,
		name: "Emily Johnson",
		role: "Product Manager",
		company: "NextGen Products",
		image: "/assets/testimonials/test-img.jpg",
		testimony:
			"The Prosmith team handled our office rewiring project with professionalism and attention to detail. Everything works perfectly and safely.",
	},
	{
		id: 4,
		name: "Michael Brown",
		role: "CTO",
		company: "Innovatech",
		image: "/assets/testimonials/test-img.jpg",
		testimony:
			"Prosmith provided us with a solar-powered irrigation system that has improved our farm’s productivity. Their expertise is truly impressive.",
	},
	{
		id: 5,
		name: "Sarah Davis",
		role: "Operations Manager",
		company: "Global Enterprises",
		image: "/assets/testimonials/test-img.jpg",
		testimony:
			"Prosmith exceeded our expectations with their inverter and backup solutions. Their team is responsive, reliable, and dedicated to customer satisfaction.",
	},
];

export const testimonials: TestimonyProps[] = [...testimonyObjects];
