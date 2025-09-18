// WorkflowSteps.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useAnimation, useInView } from "framer-motion";
import {
	FaComments,
	FaClipboardList,
	FaCogs,
	FaTruck,
	FaLifeRing,
} from "react-icons/fa";
import { FadeInWhenVisible } from "./animations/fadeInWhenVisible";

const STEPS = [
	{
		id: 1,
		title: "Consultation",
		description:
			"We listen to your needs and understand your goals to create the right foundation.",
		icon: <FaComments />,
		iconColor: "bg-white",
		color: "bg-primary text-white",
	},
	{
		id: 2,
		title: "Planning",
		description:
			"We strategize and design a roadmap tailored to achieve your objectives.",
		icon: <FaClipboardList />,
		iconColor: "bg-primary text-white",
		color: "bg-background text-gray-600",
	},
	{
		id: 3,
		title: "Execution",
		description:
			"We implement the plan with precision, ensuring quality at every step.",
		icon: <FaCogs />,
		iconColor: "bg-white ",
		color: "bg-primary text-white",
	},
	{
		id: 4,
		title: "Delivery",
		description:
			"We deliver the final product efficiently, on time, and with excellence.",
		icon: <FaTruck />,
		iconColor: "bg-primary text-white",
		color: "bg-background text-gray-600",
	},
	{
		id: 5,
		title: "Support",
		description:
			"We provide continuous support and assistance to keep things running smoothly.",
		icon: <FaLifeRing />,
		iconColor: "bg-white",
		color: "bg-primary text-white",
	},
];

export default function WorkflowSteps() {
	const containerRef = useRef(null);

	// Motion scroll value
	const { scrollY } = useScroll();
	const lastY = useRef(0);

	// === FIXED: correct useState call ===
	const [direction, setDirection] = useState("down"); // "up" | "down"

	// detect scroll direction
	useEffect(() => {
		const unsubscribe = scrollY.onChange((latest) => {
			if (latest > lastY.current) setDirection("down");
			else if (latest < lastY.current) setDirection("up");
			lastY.current = latest;
		});
		return unsubscribe;
	}, [scrollY]);

	return (
		<section
			ref={containerRef}
			className="py-16 px-6 md:px-12">
			<div className="max-w-7xl mx-auto text-center mb-25 md:mb-12">
				<FadeInWhenVisible>
					<h1 className="text-3xl md:text-4xl font-bold mb-4 text-white/80">
						Our Workflow
					</h1>
				</FadeInWhenVisible>
				<FadeInWhenVisible>
					<p className="text-gray-600 font-semibold">
						Consultation → Planning → Execution → Delivery → Support
					</p>
				</FadeInWhenVisible>
			</div>

			<div className="relative">
				{/* center timeline line */}
				<div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-600 -translate-x-1/2" />

				{/* spacing between steps so they enter/leave viewport */}
				<div className="space-y-24">
					{STEPS.map((step, i) => (
						<StepItem
							key={step.id}
							step={step}
							index={i}
							scrollDirection={direction}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function StepItem({ step, index, scrollDirection }) {
	const ref = useRef(null);
	const inView = useInView(ref, { amount: 0.5 });
	const controls = useAnimation();

	// variants: hidden uses the current scroll direction to determine which way it hides (y offset)
	const variants = {
		hidden: (dir) => ({
			opacity: 0,
			y: dir === "down" ? 30 : -30, // if scrolling down, hide by moving down; if up, hide by moving up
			transition: { duration: dir === "down" ? 0.9 : 0.6, ease: "easeOut" },
		}),
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	useEffect(() => {
		// show when element is in view; hide when it leaves view
		if (inView) controls.start("visible");
		else controls.start("hidden");
	}, [inView, controls, scrollDirection]);

	const isLeft = index % 2 === 0;

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={variants}
			custom={scrollDirection} // pass direction into the variants
			className={`relative flex items-center ${
				isLeft ? "justify-start" : "justify-end"
			}`}>
			{/* content card */}
			<div className={`w-full md:w-5/12 p-6 rounded-lg shadow  ${step.color}`}>
				<div className="flex items-center gap-3 mb-3">
					<div
						className={`${step.iconColor} p-2 rounded text-gray-700 text-xl`}>
						{step.icon}
					</div>
					<h3 className="text-xl font-semibold">{step.title}</h3>
				</div>
				<p className="text-sm">{step.description}</p>
			</div>

			{/* center step number */}
			<div
				className={`absolute left-1/2 transform -translate-x-1/2 -top-15 md:top-1/2 md:-translate-y-1/2 ${step.iconColor}  w-10 h-10 rounded-full flex items-center justify-center font-bold text-gray-700`}>
				{step.id}
			</div>
		</motion.div>
	);
}
