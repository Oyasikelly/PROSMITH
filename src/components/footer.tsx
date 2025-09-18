import {
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
} from "react-icons/fa";
import { FadeInWhenVisible } from "./animations/fadeInWhenVisible";
import {
	SlideInLeftWhenVisible,
	SlideInRightWhenVisible,
} from "./animations/slideInAnimations";

export default function Footer() {
	return (
		<footer className="w-full bg-gray-900 text-white relative">
			{/* Background image with overlay */}
			<FadeInWhenVisible>
				<div className="relative w-full h-full">
					<img
						src="/assets/test-img.jpg"
						alt="Footer Background"
						className="absolute inset-0 w-full h-full object-cover object-center"
					/>
					<div className="absolute inset-0 bg-black/70"></div>

					{/* Footer content */}
					<div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
						{/* Brand */}
						<SlideInRightWhenVisible>
							<div>
								<h1 className="text-3xl font-bold mb-4">Prosmith</h1>
								<p className="text-white/70 text-sm">
									Your trusted partner for professional services that deliver
									results.
								</p>
							</div>
						</SlideInRightWhenVisible>
						{/* Location */}
						<SlideInLeftWhenVisible>
							<div>
								<h3 className="font-semibold text-lg mb-3">Our Location</h3>
								<p className="flex items-center gap-2 text-white/70">
									<FaMapMarkerAlt /> 123 Main Street, City, Country
								</p>
							</div>
						</SlideInLeftWhenVisible>

						{/* Contact */}
						<SlideInRightWhenVisible>
							<div>
								<h3 className="font-semibold text-lg mb-3">Contact Us</h3>
								<p className="flex items-center gap-2 text-white/70">
									<FaPhoneAlt /> +234 816 809 0487
								</p>
								<p className="flex items-center gap-2 text-white/70">
									<FaEnvelope />
									prosmithenterprise@gmail.com
								</p>
							</div>
						</SlideInRightWhenVisible>

						{/* Social Media */}
						<SlideInLeftWhenVisible>
							<div>
								<h3 className="font-semibold text-lg mb-3">Follow Us</h3>
								<div className="flex gap-4">
									<a
										href="#"
										className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition">
										<FaFacebookF />
									</a>
									<a
										href="#"
										className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition">
										<FaTwitter />
									</a>
									<a
										href="#"
										className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition">
										<FaInstagram />
									</a>
									<a
										href="#"
										className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-primary transition">
										<FaLinkedinIn />
									</a>
								</div>
							</div>
						</SlideInLeftWhenVisible>
					</div>

					{/* Bottom Bar */}
					<SlideInRightWhenVisible>
						<div className="relative border-t border-white/20 mt-10 py-4 text-center text-white/60 text-sm">
							© {new Date().getFullYear()} Prosmith. All rights reserved.
						</div>
					</SlideInRightWhenVisible>
				</div>
			</FadeInWhenVisible>
		</footer>
	);
}
