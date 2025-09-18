"use client";
import { FaArrowDown } from "react-icons/fa6";
import { Button } from "../ui/button";
import { RiArrowRightDoubleLine, RiArrowLeftDoubleLine } from "react-icons/ri";
import {
	SlideInLeftWhenVisible,
	SlideInRightWhenVisible,
} from "../animations/slideInAnimations";
import WorkflowSteps from "@/components/WorkflowSteps";
import { useState } from "react";
import { services } from "@/data/services";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedArrow from "../animations/arrowAnimation";
import FAQ from "../faq";
import { FadeInWhenVisible } from "../animations/fadeInWhenVisible";
import { useSwipeable } from "react-swipeable";

function ServiceHero() {
	return (
		<section className="relative w-full h-screen">
			<img
				src="/assets/test-img.jpg"
				alt="test Image"
				className="w-full h-full object-cover blur-xs object-center"
			/>
			<div
				id="overlay"
				className="absolute top-0 left-0 right-0 bottom-0 h-full w-full bg-gradient-to-b from-black/60 via-black/30 to-transparent flex flex-col items-center justify-between">
				<div className="text-white max-w-auto md:max-w-3xl mx-auto px-6 py-12 text-center mt-16 md:mt-20 overflow-auto md:overflow-hidden scrollbar-hide">
					<FadeInWhenVisible>
						<h1 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight">
							Our Services at Prosmith
						</h1>
					</FadeInWhenVisible>
					<FadeInWhenVisible>
						<p className="text-lg md:text-xl mb-8">
							At Prosmith, we’re committed to delivering solutions that empower
							businesses to grow smarter, faster, and stronger. Our team blends
							expertise, innovation, and hands-on execution to ensure you have
							the right tools and guidance at every stage.
						</p>
					</FadeInWhenVisible>

					<div className="flex flex-wrap gap-6 justify-center">
						<SlideInLeftWhenVisible>
							<div className="bg-white/10 border border-white/20 rounded-lg px-6 py-4 w-64">
								<h2 className="text-base md:text-xl font-semibold mb-2">
									Consulting
								</h2>
								<p className="text-sm md:text-base">
									Clear strategies and expert guidance tailored to your goals.
								</p>
							</div>
						</SlideInLeftWhenVisible>

						<SlideInRightWhenVisible>
							<div className="bg-white/10 border border-white/20 rounded-lg px-6 py-4 w-64">
								<h2 className="text-base md:text-xl font-semibold mb-2">
									Development
								</h2>

								<p className="text-sm md:text-base">
									Custom solutions that simplify processes and drive growth.
								</p>
							</div>
						</SlideInRightWhenVisible>

						<SlideInLeftWhenVisible>
							<div className="bg-white/10 border border-white/20 rounded-lg px-6 py-4 w-64">
								<h2 className="text-base md:text-xl font-semibold mb-2">
									Support
								</h2>
								<p className="text-sm md:text-base">
									Continuous care to keep your systems secure and running
									smoothly.
								</p>
							</div>
						</SlideInLeftWhenVisible>
					</div>
				</div>

				{/* Arrow */}
				<div className="mb-6 md:mb-12">
					<Link href="#Services">
						<FaArrowDown className="text-3xl text-primary animate-bounce cursor-pointer hover:scale-125 hover:text-primary/70 transition-all duration-300" />
					</Link>
				</div>
			</div>
		</section>
	);
}

export default function ServicePage() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState<"left" | "right">("right");

	function handlePrev() {
		setDirection("left");
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? services.length - 1 : prevIndex - 1
		);
	}

	function handleNext() {
		setDirection("right");
		setCurrentIndex((prevIndex) =>
			prevIndex === services.length - 1 ? 0 : prevIndex + 1
		);
	}

	// Animation variants
	const variants = {
		enter: (direction: "left" | "right") => ({
			x: direction === "right" ? 200 : -200,
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
			transition: { duration: 0.5 },
		},
		exit: (direction: "left" | "right") => ({
			x: direction === "right" ? -200 : 200,
			opacity: 0,
			transition: { duration: 0.5 },
		}),
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => handleNext(),
		onSwipedRight: () => handlePrev(),
		preventScrollOnSwipe: true,
		trackMouse: true, // allows dragging on desktop too
	});
	return (
		<div className="min-h-screen w-full overflow-hidden">
			{/* HERO */}
			<ServiceHero />

			<section
				id="Services"
				className="bg-foreground h-screen w-full  px-6 space-y-6 flex flex-col items-center justify-center">
				<div className="max-w-7xl mx-auto px-0 md:px-6 flex flex-col items-center justify-center">
					<SlideInLeftWhenVisible>
						<h1 className="text-2xl md:text-4xl text-center md:text-right font-bold mb-6 text-white/80 ">
							Select a service that fits your needs
							<span className="text-primary"> —</span> we’ve got you
							<span className="text-primary"> covered!</span>
						</h1>
					</SlideInLeftWhenVisible>

					<FadeInWhenVisible>
						<div className="flex items-center">
							<AnimatedArrow direction="left">
								<RiArrowLeftDoubleLine
									onClick={handlePrev}
									className="text-3xl md:text-5xl lg:text-7xl text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-300 hover:-translate-x-4"
								/>
							</AnimatedArrow>

							<div
								{...handlers}
								className="w-full shadow-2xl mx-auto px-0 md:px-6 py-6 text-gray-600 flex items-center justify-center space-x-4 overflow-hidden">
								<AnimatePresence
									custom={direction}
									mode="wait">
									<motion.div
										key={services[currentIndex].id}
										custom={direction}
										variants={variants}
										initial="enter"
										animate="center"
										exit="exit"
										className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 bg-background rounded-lg">
										<div>
											<img
												src={
													services[currentIndex].img || "/assets/test-img.jpg"
												}
												alt={services[currentIndex].name}
												className="w-full h-full object-cover object-center rounded-lg"
											/>
										</div>
										<div className="p-2 md:p-0 flex flex-col items-center md:items-start">
											<h2 className="text-2xl md:text-4xl text-gray-600 font-bold mb-4">
												{services[currentIndex].name}
											</h2>
											<p className="leading-relaxed text-sm md:text-base  text-center md:text-left">
												{services[currentIndex].description}
											</p>
											<Button
												url={`/contact?service=${encodeURIComponent(
													services[currentIndex].name
												)}`}
												variant="default"
												className="mt-4">
												Select this
											</Button>
										</div>
									</motion.div>
								</AnimatePresence>
							</div>

							<AnimatedArrow direction="right">
								<RiArrowRightDoubleLine
									onClick={handleNext}
									className="text-3xl md:text-5xl lg:text-7xl text-gray-600 cursor-pointer hover:text-gray-800 transition-colors duration-300 hover:translate-x-4"
								/>
							</AnimatedArrow>
						</div>
					</FadeInWhenVisible>
				</div>
			</section>
			<section className="bg-foreground  w-full space-y-6 flex flex-col items-center justify-center">
				<WorkflowSteps />
			</section>
			<section className="bg-background w-full space-y-6 flex flex-col items-center justify-center">
				<FAQ />
			</section>
		</div>
	);
}
