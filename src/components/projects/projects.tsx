"use client";
import { Button } from "../ui/button";
import { RiArrowRightDoubleLine, RiArrowLeftDoubleLine } from "react-icons/ri";
import {
	SlideInLeftWhenVisible,
	SlideInRightWhenVisible,
} from "../animations/slideInAnimations";
import { useState } from "react";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedArrow from "../animations/arrowAnimation";
import { FadeInWhenVisible } from "../animations/fadeInWhenVisible";
import { useSwipeable } from "react-swipeable";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { projectProblems } from "@/data/projects-problem";
import { projectSolutions } from "@/data/projects-solution";
import FAQ from "../faq";

export default function ProjectsPage() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState<"left" | "right">("right");

	function handlePrev() {
		setDirection("left");
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? projects.length - 1 : prevIndex - 1
		);
	}

	function handleNext() {
		setDirection("right");
		setCurrentIndex((prevIndex) =>
			prevIndex === projects.length - 1 ? 0 : prevIndex + 1
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
		<div className="min-h-screen w-full overflow-hidden ">
			{/* HERO */}
			<ProjectsHero />

			<ProjectsCards
				handleNext={handleNext}
				handlePrev={handlePrev}
				currentIndex={currentIndex}
				handlers={handlers}
				direction={direction}
				variants={variants}
			/>
			<FAQ />
		</div>
	);
}

interface ProjectCardsProps {
	handlePrev: () => void;
	handleNext: () => void;
	currentIndex: number;
	handlers: ReturnType<typeof useSwipeable>;
	direction: "left" | "right";
	variants: {
		enter: (direction: "left" | "right") => { x: number; opacity: number };
		center: { x: number; opacity: number; transition: { duration: number } };
		exit: (direction: "left" | "right") => {
			x: number;
			opacity: number;
			transition: { duration: number };
		};
	};
}

function ProjectsCards({
	handleNext,
	handlePrev,
	currentIndex,
	handlers,
	direction,
	variants,
}: ProjectCardsProps) {
	const [open, setOpen] = useState(false);

	const currentProject = projects[currentIndex];
	const currentProblem = projectProblems.find(
		(p) => p.projectId === currentProject.id
	);
	const currentSolution = projectSolutions.find(
		(s) => s.projectId === currentProject.id
	);

	return (
		<section
			id="projects"
			className="bg-foreground h-full w-full py-12 px-0 md:px-6 space-y-6 flex flex-col items-center justify-center">
			<div className="max-w-7xl mx-auto px-0 flex flex-col items-center justify-center">
				<SlideInLeftWhenVisible>
					<h1 className="text-2xl md:text-4xl text-center md:text-right font-bold mb-10 text-white/80 ">
						View <span className="text-primary">different</span> projects
					</h1>
					<p className="text-white/70 text-center mb-6 text-sm md:text-base ">
						Swipe to see more of our projects
					</p>
				</SlideInLeftWhenVisible>

				<FadeInWhenVisible>
					<div className="flex items-center">
						<AnimatedArrow direction="left">
							<div className="absolute top-1/2 left-5">
								<RiArrowLeftDoubleLine
									onClick={handlePrev}
									className="text-3xl md:text-5xl lg:text-7xl text-gray-600 cursor-pointer hover:text-gray-700 transition-colors duration-300 hover:-translate-x-4"
								/>
							</div>
						</AnimatedArrow>

						<div
							{...handlers}
							className="
                                w-full 
                                shadow-2xl shadow-primary/40 
                                hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]  
                                transition-shadow duration-300 
                                mx-auto px-6 md:px-6 py-18 
                                text-gray-600 
                                flex items-center justify-center space-x-4  
                                overflow-hidden 
                                rounded-xl
                                ">
							<AnimatePresence
								custom={direction}
								mode="wait">
								<motion.div
									key={projects[currentIndex].id}
									custom={direction}
									variants={variants}
									initial="enter"
									animate="center"
									exit="exit"
									className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-6 space-y-13 py-5 rounded-lg">
									<div className="relative flex py-10">
										<div className="absolute -top-0 left-1/4 md:-top-10 md:left-1/4">
											<img
												src={
													projects[currentIndex].img || "/assets/test-img.jpg"
												}
												alt={projects[currentIndex].title}
												className="w-full h-full object-cover object-center rounded-lg"
											/>
										</div>
										<div className="absolute -top-10 left-0 w-1/2 md:-top-30 md:left-4 w-1/2">
											<img
												src={
													projects[currentIndex].img || "/assets/test-img.jpg"
												}
												alt={projects[currentIndex].title}
												className="w-full h-full object-cover object-center rounded-lg"
											/>
										</div>
									</div>
									<div className="p-2 mt-10 md:mt-0 md:p-0 flex flex-col items-center text-background/70 md:items-start text-center md:text-left px-4">
										<h2 className="text-2xl md:text-4xl text-background/90 font-bold mb-4">
											{projects[currentIndex].title}
										</h2>
										<p className="leading-relaxed text-sm md:text-base ">
											{projects[currentIndex].description}
										</p>
										<div className="grid grid-cols-3 gap-6 jsutify-center mt-6">
											<div>
												<h2 className="text-sm md:text-xl text-primary font-semibold">
													Done by:
												</h2>
												<p className="text-gray-600">
													{projects[currentIndex].doneBy}
												</p>
											</div>
											<div>
												<h2 className="text-sm md:text-xl text-primary font-semibold">
													For:
												</h2>
												<p className="text-gray-600">
													{projects[currentIndex].for}
												</p>
											</div>
											<div>
												<h2 className="text-sm md:text-xl text-primary font-semibold">
													Location:
												</h2>
												<p className="text-gray-600">
													{projects[currentIndex].location}
												</p>
											</div>
										</div>

										{/* Dialog Trigger */}
										<Dialog
											open={open}
											onOpenChange={setOpen}>
											<DialogTrigger asChild>
												<Button
													variant="default"
													className="bg-transparent hover:bg-transparent px-0 border-b-2 border-primary pb-1 mt-10 hover:border-primary/60 hover:text-white/60 transition-all duration-300">
													View problem and solution
												</Button>
											</DialogTrigger>

											<DialogContent className="bg-foreground text-white h-full w-full overflow-auto scrollbar-hide">
												<DialogHeader>
													<DialogTitle className="sr-only text-2xl font-bold">
														Problem & Solution
													</DialogTitle>
												</DialogHeader>

												<div className="w-full p-6 grid md:grid-cols-2 gap-8">
													{/* Problem */}
													<div className="space-y-4">
														<h3 className="text-xl font-semibold text-red-400">
															Problem
														</h3>
														<img
															src={currentProblem?.imageUrl}
															alt="Problem"
															className="rounded-lg w-full h-48 object-cover"
														/>
														<p className="text-sm text-white/70 leading-relaxed">
															{currentProblem?.problem}
														</p>
													</div>

													{/* Solution */}
													<div className="space-y-4">
														<h3 className="text-xl font-semibold text-primary">
															Solution
														</h3>
														<img
															src={currentSolution?.imageUrl}
															alt="Solution"
															className="rounded-lg w-full h-48 object-cover"
														/>
														<p className="text-sm text-white/70 leading-relaxed">
															{currentSolution?.solution}
														</p>
													</div>
												</div>
											</DialogContent>
										</Dialog>
									</div>
								</motion.div>
							</AnimatePresence>
						</div>

						<AnimatedArrow direction="right">
							<div className="absolute top-1/2 right-5">
								<RiArrowRightDoubleLine
									onClick={handleNext}
									className="text-3xl md:text-5xl lg:text-7xl text-gray-600 cursor-pointer hover:text-gray-700 transition-colors duration-300 hover:-translate-x-4"
								/>
							</div>
						</AnimatedArrow>
					</div>
				</FadeInWhenVisible>
			</div>
		</section>
	);
}

function ProjectsHero() {
	return (
		<section className="relative w-full h-screen">
			<img
				src="/assets/test-img.jpg"
				alt="test Image"
				className="w-full h-full object-cover blur-xs object-center"
			/>
			<div
				id="overlay"
				className="flex items-center justify-center px-6 py-12 h-screen w-full bg-black/50 absolute top-0 left-0 right-0 bottom-0">
				<div className="max-w-7xl  mx-auto px-0 md:px-6 ">
					<div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 text-white/80">
						<div className="">
							<SlideInLeftWhenVisible>
								<h2 className="text-2xl md:text-4xl mb-4 font-semibold">
									Our projects
								</h2>
							</SlideInLeftWhenVisible>

							<SlideInRightWhenVisible>
								<p className="mb-4">
									At Prosmith, we deliver impactful business solutions by
									connecting organizations with leading experts in consulting,
									project management, and technical support. Since 2023, we’ve
									empowered businesses of all sizes to grow, innovate, and
									achieve their goals through tailored strategies and practical
									guidance.
								</p>
							</SlideInRightWhenVisible>

							<FadeInWhenVisible>
								<Button
									url="./contact"
									variant="default">
									Contact us today
								</Button>
							</FadeInWhenVisible>
						</div>
						<SlideInRightWhenVisible>
							<div className="absolute -bottom-1/6 md:-bottom-1/4 md:right-1/4 flex flex-col items-center justify-center">
								<img
									src="assets/test-img.jpg"
									alt=""
									className="w-3/4 h-full object-cover"
								/>
							</div>
							<div>
								<img
									src="assets/test-img.jpg"
									alt=""
									className="w-full h-full object-cover"
								/>
							</div>
						</SlideInRightWhenVisible>
					</div>
				</div>
			</div>
		</section>
	);
}
