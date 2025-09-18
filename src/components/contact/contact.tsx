"use client";
import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import {
	SlideInLeftWhenVisible,
	SlideInRightWhenVisible,
} from "../animations/slideInAnimations";
import { services } from "@/data/services";
import { useSearchParams } from "next/navigation";

export default function ContactPage() {
	const searchParams = useSearchParams();
	const serviceFromUrl = searchParams.get("service") || "";

	const [dateTime, setDateTime] = useState(new Date());
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
		service: serviceFromUrl,
		date: new Date().toLocaleDateString(),
		time: new Date().toLocaleTimeString(),
	});
	useEffect(() => {
		const timer = setInterval(() => setDateTime(new Date()), 1000);
		return () => clearInterval(timer);
	}, []);

	const time = dateTime.toLocaleTimeString([], {
		hour: "2-digit",
		minute: "2-digit",
	});
	const date = dateTime.toLocaleDateString([], {
		weekday: "short",
		month: "short",
		day: "numeric",
		year: "numeric",
	});

	function handleChange(
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// For now, just log form data
		console.log("Form Submitted:", formData);

		// You can send data to a backend API here, e.g.:
		// fetch("/api/contact", {
		//   method: "POST",
		//   headers: { "Content-Type": "application/json" },
		//   body: JSON.stringify(formData),
		// });

		// Reset form after submission
		setFormData({
			name: "",
			email: "",
			message: "",
			service: "",
			date: new Date().toLocaleDateString(),
			time: new Date().toLocaleTimeString(),
		});
	};
	return (
		<section className="relative w-full md:min-h-screen">
			{/* Background image (absolutely positioned so it doesn't push content height) */}
			<img
				src="/assets/test-img.jpg"
				alt="background"
				className="absolute inset-0 w-full h-full object-cover object-center"
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/50" />

			{/* Content (relative and z-10 so it sits above overlay) */}
			<div className="relative z-10 px-6 py-15 md:py-44">
				<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start md:items-center">
					{/* Left (info) */}
					<div className="relative pl-10 md:pl-16 text-white/90">
						<div className="absolute left-12 md:left-18 top-0 bottom-0 w-[2px] bg-primary/40" />

						<SlideInLeftWhenVisible>
							<div className="mb-6 pl-8">
								<h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
									{time}
								</h1>
								<p className="uppercase tracking-widest text-sm mt-2">{date}</p>
								<div className="mt-3 border-b-2 border-white w-20" />
							</div>
						</SlideInLeftWhenVisible>
						<SlideInLeftWhenVisible>
							<p className="text-lg font-semibold mb-6 pl-8 text-white/70">
								If you have any questions. Feel free to contact us!
							</p>
						</SlideInLeftWhenVisible>

						<div className="space-y-4">
							<SlideInLeftWhenVisible>
								<div className="flex items-center gap-3">
									<Phone className="w-5 h-5 text-white/70" />
									<span>+123-456-7890</span>
								</div>
							</SlideInLeftWhenVisible>
							<SlideInRightWhenVisible>
								<div className="flex items-center gap-3">
									<Mail className="w-5 h-5 text-white/70" />
									<span>hello@reallygreatsite.com</span>
								</div>
							</SlideInRightWhenVisible>
							<SlideInLeftWhenVisible>
								<div className="flex items-center gap-3">
									<MapPin className="w-5 h-5 text-white/70" />
									<span>123 Anywhere St., Any City</span>
								</div>
							</SlideInLeftWhenVisible>
							<SlideInRightWhenVisible>
								<div className="flex items-center gap-3">
									<Globe className="w-5 h-5 text-white/70" />
									<span>www.reallygreatsite.com</span>
								</div>
							</SlideInRightWhenVisible>
						</div>
					</div>

					{/* Right (form) */}
					<SlideInRightWhenVisible>
						<div className="bg-white/8 backdrop-blur-xs p-6 rounded-xl shadow-lg">
							<h2 className="text-xl font-semibold mb-4 text-white/90">
								Send us a message
							</h2>
							<form
								onSubmit={handleSubmit}
								className="space-y-4">
								<input
									type="text"
									placeholder="Your Name"
									required
									name="name"
									value={formData.name}
									onChange={handleChange}
									className="w-full px-4 py-2 rounded-lg bg-transparent text-white/80 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
								/>
								<input
									type="email"
									placeholder="Your Email"
									required
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="w-full px-4 py-2 rounded-lg bg-transparent text-white/80 border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
								/>
								<select
									name="service"
									required
									value={formData.service}
									onChange={handleChange}
									className="w-full px-4 py-2 rounded-lg bg-transparent text-white/80 border border-white/20 placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary">
									<option
										value=""
										disabled
										className="bg-black text-white/80">
										Select a service
									</option>
									{services.map((service, idx) => (
										<option
											key={idx}
											value={service.name}
											className="bg-black text-white">
											{service.name}
										</option>
									))}
								</select>
								<textarea
									placeholder="Your Message"
									rows={5}
									required
									name="message"
									value={formData.message}
									onChange={handleChange}
									className="w-full px-4 py-2 rounded-lg bg-transparent text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary"
								/>
								<button
									type="submit"
									className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/80 transition">
									Send Message
								</button>
							</form>
						</div>
					</SlideInRightWhenVisible>
				</div>
			</div>
		</section>
	);
}
