"use client";
import { useState } from "react";
import { FiPlus, FiMinus, FiArrowRight } from "react-icons/fi";
import { FadeInWhenVisible } from "./animations/fadeInWhenVisible";
import {
	SlideInLeftWhenVisible,
	SlideInRightWhenVisible,
} from "./animations/slideInAnimations";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
	{
		question: "How do Prosmith services help today’s business challenges?",
		answer:
			"Prosmith provides innovative solutions such as improving efficiency, reducing costs, and creating sustainable strategies for long-term growth.",
	},
	{
		question:
			"What is a question that is commonly asked by potential customers?",
		answer:
			"Customers often ask about the reliability, effectiveness, and overall value of Prosmith’s services.",
	},
	{
		question: "Will you be willing to provide another question right here?",
		answer:
			"Yes, you can add as many FAQ items as needed to guide your customers and provide clarity.",
	},
	{
		question: "How do Prosmith services help today’s business challenges?",
		answer:
			"They contribute by offering tailored strategies, innovative solutions, and expert guidance to ensure measurable results.",
	},
	{
		question:
			"What is a question that is commonly asked by potential customers?",
		answer:
			"Another common question is about cost-effectiveness, timelines, and the level of support available after delivery.",
	},
];

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-start">
			{/* Left Section */}
			<div>
				<FadeInWhenVisible>
					<h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
						Frequently Asked Questions
					</h2>
				</FadeInWhenVisible>
				<SlideInLeftWhenVisible>
					<p className="text-gray-600 mb-6">
						Got more questions? Feel free to contact us for more information by
						clicking the link provided below.
					</p>
				</SlideInLeftWhenVisible>
				<FadeInWhenVisible>
					<button className="hidden md:flex order-2 md:order-1 items-center gap-3 bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/70 transition group">
						Connect with Us
						<span className="bg-white p-1 rounded-full group-hover:translate-x-3 transition-all duration-300 text-primary">
							<FiArrowRight size={18} />
						</span>
					</button>
				</FadeInWhenVisible>
			</div>

			{/* Right Section (FAQ List) */}
			<div className="flex flex-col gap-4">
				{faqs.map((faq, index) => (
					<div
						key={index}
						className="border border-gray-200 rounded-lg p-4 cursor-pointer transition"
						onClick={() => toggleFAQ(index)}>
						<SlideInRightWhenVisible>
							<div className="flex justify-between items-center">
								<h3 className="text-primary font-medium">{faq.question}</h3>
								{openIndex === index ? (
									<FiMinus className="text-primary" />
								) : (
									<FiPlus className="text-primary" />
								)}
							</div>

							{/* Animate answer */}
							<AnimatePresence>
								{openIndex === index && (
									<motion.p
										key="content"
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.4, ease: "easeInOut" }}
										className="text-gray-600 mt-3 overflow-hidden">
										{faq.answer}
									</motion.p>
								)}
							</AnimatePresence>
						</SlideInRightWhenVisible>
					</div>
				))}
				<FadeInWhenVisible>
					<div className="flex items-center justify-center">
						<button className="flex md:hidden items-center gap-3 bg-primary text-white mt-8 px-6 py-3 rounded-md font-medium hover:bg-primary/70 transition">
							Connect with Us
							<span className="bg-white p-1 rounded-full hover:translate-x-3 transition-all duration-300 text-primary">
								<FiArrowRight size={18} />
							</span>
						</button>
					</div>
				</FadeInWhenVisible>
			</div>
		</section>
	);
}
