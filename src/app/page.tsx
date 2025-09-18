"use client";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { testimonials } from "@/data/testtimonies";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInWhenVisible } from "@/components/animations/fadeInWhenVisible";
import { useInView } from "react-intersection-observer";
import {
	SlideInLeftWhenVisible,
	SlideInRightWhenVisible,
} from "@/components/animations/slideInAnimations";

function WelcomeBanner() {
	return (
		<section className="h-screen w-full">
			<img
				src="/assets/test-img.jpg"
				alt="test Image"
				className="w-full h-full object-cover object-center"
			/>
			<div
				id="overlay"
				className="h-full w-full bg-black/50 absolute top-0 left-0 right-0 bottom-0">
				<div className="max-w-7xl h-screen mx-auto px-6 py-6 flex flex-col justify-center">
					<FadeInWhenVisible>
						{/* Hero Section Content */}
						<div className="self-start text-white">
							<SlideInRightWhenVisible>
								<h1 className="text-4xl md:text-6xl font-bold mb-4">
									Welcome to Prosmith
								</h1>
							</SlideInRightWhenVisible>

							<SlideInLeftWhenVisible>
								<p className="text-lg md:text-2xl mb-8">
									Your trusted partner for professional services <br />
									that deliver results.
								</p>
							</SlideInLeftWhenVisible>

							<SlideInLeftWhenVisible>
								<p className="text-base md:text-xl mb-8">
									We specialize in connecting you with top experts to help your
									business grow and succeed. <br />
									Discover tailored solutions designed to meet your unique
									needs.
								</p>
							</SlideInLeftWhenVisible>

							<div className="flex flex-col md:flex-row gap-4">
								<SlideInRightWhenVisible>
									<Button
										variant="default"
										url="./contact"
										className="w-fit md:w-auto">
										Get Free Consultation
									</Button>
								</SlideInRightWhenVisible>
								<SlideInRightWhenVisible>
									<Button
										variant="default"
										url="#Services"
										className="w-fit md:w-auto">
										Our Services
									</Button>
								</SlideInRightWhenVisible>
							</div>
						</div>
					</FadeInWhenVisible>
				</div>
			</div>
		</section>
	);
}

function About() {
	return (
		<section className="relative bg-foreground px-6 py-12">
			<div className="max-w-7xl mx-auto px-0 md:px-6">
				<SlideInLeftWhenVisible>
					<h1 className="text-2xl md:text-4xl font-bold mb-6 text-white/90">
						<span className="border-b-2 border-primary pb-1">Who we are</span>
					</h1>
				</SlideInLeftWhenVisible>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white/80">
					<div className="">
						<SlideInLeftWhenVisible>
							<h2 className="text-2xl md:text-4xl mb-4 font-semibold">
								Prosmith: Your Partner in Professional Excellence
							</h2>
						</SlideInLeftWhenVisible>

						<SlideInRightWhenVisible>
							<p className="mb-4">
								Prosmith is a leading provider of business solutions,
								specializing in connecting organizations with top-tier experts
								across consulting, project management, and technical support.
								Since our founding in 2023, we have helped businesses of all
								sizes unlock growth and achieve their goals through tailored
								strategies and hands-on guidance.
							</p>
						</SlideInRightWhenVisible>

						<SlideInLeftWhenVisible>
							<p className="mb-4">
								Our team is comprised of skilled professionals with deep
								industry experience, committed to delivering measurable results
								and building lasting partnerships. We pride ourselves on our
								client-centric approach, transparency, and dedication to
								quality.
							</p>
						</SlideInLeftWhenVisible>

						<FadeInWhenVisible>
							<Button
								url="./contact"
								variant="default">
								Contact us today
							</Button>
						</FadeInWhenVisible>
					</div>
					<SlideInRightWhenVisible>
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
		</section>
	);
}

function Services() {
	const slicedServices = services.slice(0, 3);

	return (
		<section
			id="Services"
			className="relative bg-background mx-auto px-6 py-12 h-full">
			<div className="max-w-7xl mx-auto px-0 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-0 text-gray-600">
				{/* Left (smaller column) */}
				<SlideInLeftWhenVisible>
					<div className="md:col-span-1">
						<h2 className="text-3xl md:text-4xl font-bold mb-8">
							<span className="border-b-2 border-primary pb-1">Services</span>
						</h2>
					</div>
				</SlideInLeftWhenVisible>

				{/* Right (larger column) */}
				<div className="md:col-span-2 py-0 md:pb-6">
					<SlideInRightWhenVisible>
						<p className="text-base md:text-lg mb-4">
							At Prosmith, we offer a comprehensive range of professional
							services designed to meet the diverse needs of our clients. Our
							expertise spans various industries, allowing us to provide
							tailored solutions that drive success and foster growth.
						</p>
						<p className="text-base md:text-lg">
							Whether you&apos;re looking for strategic consulting, project
							management, or specialized technical support, our team of
							experienced professionals is here to help you navigate complex
							challenges and achieve your business objectives with confidence.
						</p>
					</SlideInRightWhenVisible>
				</div>
			</div>
			<div>
				<div className="max-w-7xl mx-auto px-0 md:px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-600">
					{slicedServices.map((service) => (
						<SlideInLeftWhenVisible key={service.id}>
							<div className="bg-white/10 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
								{/* Image wrapper */}
								<div className="w-full h-48">
									<img
										src="/assets/test-img.jpg"
										alt={service.name}
										className="w-full h-full object-cover"
									/>
								</div>

								{/* Text content */}
								<div className="p-4 flex-1">
									<h3 className="text-xl font-semibold mb-2 text-gray-800">
										{service.name}
									</h3>
								</div>
							</div>
						</SlideInLeftWhenVisible>
					))}
				</div>
			</div>

			<div className="flex justify-center mt-6">
				<Button
					variant="default"
					url="/services"
					className="w-fit md:w-auto ">
					View All Services
				</Button>
			</div>
		</section>
	);
}

function Projects() {
	return (
		<section
			id="projects"
			className="bg-background h-full relative">
			<div className="max-w-7xl mx-auto px-6 py-6 text-gray-600">
				<FadeInWhenVisible>
					<h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-20">
						<span className="border-b-2 border-primary pb-1">Projects</span>
					</h2>
					<p className="text-base md:text-lg mb-12">
						Explore our portfolio of successful projects that showcase our
						expertise and commitment to excellence. From innovative solutions to
						transformative outcomes, see how we&apos;ve helped our clients
						achieve their goals.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* Example Project Card */}
						{projects.map((project) => (
							<SlideInLeftWhenVisible key={project.id}>
								<div
									key={project.id}
									className="bg-white/10 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
									{/* Image wrapper */}
									<div className="w-full h-48">
										<img
											src="/assets/test-img.jpg"
											alt={project.title}
											className="w-full h-full object-cover"
										/>
									</div>

									{/* Text content */}
									<div className="p-4 flex-1">
										<h3 className="text-xl font-semibold mb-2 text-gray-800">
											{project.title}
										</h3>
										<p className="text-gray-600">{project.description}</p>
									</div>
								</div>
							</SlideInLeftWhenVisible>
						))}
						{/* Add more project cards as needed */}
					</div>
					<div className="w-full flex flex-col items-center justify-center">
						<Button
							variant="default"
							url="/projects"
							className="w-fit md:w-auto my-6">
							View All Projects
						</Button>
					</div>
				</FadeInWhenVisible>
			</div>
		</section>
	);
}

function Experience() {
	const stats = [
		{ label: "Year Established", value: 2023 },
		{ label: "Skilled Workers", value: 10 },
		{ label: "Completed Projects", value: 40 },
	];

	return (
		<section className="bg-ring h-full  relative">
			<div className="max-w-7xl mx-auto px-6 py-20">
				<div className="text-white/90 flex flex-col md:flex-row text-center space-y-4 items-center justify-center gap-10">
					{stats.map((stat, index) => (
						<Counter
							key={index}
							label={stat.label}
							value={stat.value}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function Counter({ label, value }: { label: string; value: number }) {
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (inView) {
			let start = 0;
			const duration = 2000; // 2 seconds
			const increment = value / (duration / 50); // update every 50ms
			const counter = setInterval(() => {
				start += increment;
				if (start >= value) {
					start = value;
					clearInterval(counter);
				}
				setCount(Math.floor(start));
			}, 50);
		}
	}, [inView, value]);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className="font-bold text-2xl md:text-4xl">
			{label} <br />
			<span className="font-semibold text-gray-600">
				{label === "Completed Projects" ? count + "+" : count}
			</span>
		</motion.div>
	);
}

interface TestimonyProps {
	id: number;
	name: string;
	role: string;
	company: string;
	image: string;
	testimony: string;
}

interface TestimonialsProps {
	testimonials: TestimonyProps[];
}

function Testimonials({ testimonials }: TestimonialsProps) {
	const [itemsToShow, setItemsToShow] = useState(1);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState<"left" | "right">("right");

	function handlePrev() {
		setDirection("left");
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
		);
	}

	function handleNext() {
		setDirection("right");
		setCurrentIndex((nextIndex) =>
			nextIndex === testimonials.length - 1 ? 0 : nextIndex + 1
		);
	}

	// Responsive count
	useEffect(() => {
		function handleResize() {
			if (window.innerWidth >= 1024) {
				setItemsToShow(3);
			} else if (window.innerWidth >= 768) {
				setItemsToShow(2);
			} else {
				setItemsToShow(1);
			}
		}
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const visibleTestimonials = [
		...testimonials.slice(currentIndex, currentIndex + itemsToShow),
		...(currentIndex + itemsToShow > testimonials.length
			? testimonials.slice(
					0,
					(currentIndex + itemsToShow) % testimonials.length
			  )
			: []),
	];

	// Slide animation variants
	const variants = {
		enter: (direction: "left" | "right") => ({
			x: direction === "right" ? 100 : -100,
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
		},
		exit: (direction: "left" | "right") => ({
			x: direction === "right" ? -100 : 100,
			opacity: 0,
		}),
	};

	return (
		<section
			id="testimonials"
			className="relative bg-foreground mx-auto px-4 py-12 h-full">
			<div className="flex items-center justify-center space-x-4">
				{/* Prev Button */}
				<div
					onClick={handlePrev}
					className="flex items-center justify-center hover:cursor-pointer hover:bg-white/10 p-2 rounded-full">
					<FaArrowLeft className="text-xl md:text-4xl text-primary hover:text-primary/70 transition-colors" />
				</div>

				{/* Testimonials */}
				<div className="max-w-7xl mx-auto px-0 md:px-6 py-6 text-gray-600 overflow-hidden">
					<FadeInWhenVisible>
						<h2 className="text-white/90 text-2xl text-center md:text-left md:text-4xl font-bold mb-20">
							From Our Satisfied Clients
						</h2>
					</FadeInWhenVisible>
					<SlideInLeftWhenVisible>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white/80">
							<AnimatePresence
								mode="wait"
								custom={direction}>
								{visibleTestimonials.slice(0, itemsToShow).map((testimony) => (
									<motion.div
										key={testimony.id}
										custom={direction}
										variants={variants}
										initial="enter"
										animate="center"
										exit="exit"
										transition={{ duration: 0.5, ease: "easeInOut" }}
										className="mb-8">
										<p className="mb-4 text-center md:text-left italic">
											&quot;{testimony.testimony}&quot;
										</p>
										<div className="flex items-center">
											<img
												src={testimony.image}
												alt={testimony.name}
												className="w-12 h-12 rounded-full mr-4"
											/>
											<div>
												<p className="font-bold">{testimony.name}</p>
												<p className="text-sm text-gray-400">
													{testimony.role} at {testimony.company}
												</p>
											</div>
										</div>
									</motion.div>
								))}
							</AnimatePresence>
						</div>
					</SlideInLeftWhenVisible>
				</div>

				{/* Next Button */}
				<div
					onClick={handleNext}
					className="flex items-center justify-center hover:cursor-pointer hover:bg-white/10 p-2 rounded-full">
					<FaArrowRight className="text-xl md:text-4xl text-primary hover:text-primary/70 transition-colors" />
				</div>
			</div>
		</section>
	);
}

export default function Home() {
	return (
		<div className="min-h-screen w-full">
			<main className="overflow-hidden">
				{/* Hero Section */}
				<WelcomeBanner />

				{/*About Section */}
				<About />

				{/* Services Section*/}
				<Services />

				{/* Projects Section */}
				<Projects />

				{/* Experience Section */}
				<Experience />

				{/* Testimonials Section */}
				<Testimonials testimonials={testimonials} />
			</main>
		</div>
	);
}
