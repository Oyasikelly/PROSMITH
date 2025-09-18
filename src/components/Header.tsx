"use client";
import { navLinks } from "@/data/nav-links";
import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";
import { IoCall } from "react-icons/io5";
import {
	SlideInLeftWhenVisible,
	SlideInRightWhenVisible,
} from "./animations/slideInAnimations";
import { FadeInWhenVisible } from "./animations/fadeInWhenVisible";

function Navigation() {
	const pathName = usePathname();

	return (
		<>
			{/* Desktop navigation */}
			<nav className="hidden md:flex items-center justify-between gap-8">
				{/* nav links */}
				<ul className="flex gap-6 text-base lg:text-lg font-medium">
					{navLinks.map((link) => {
						const isActive =
							pathName === link.href || pathName.startsWith(`${link.href}/`);
						return (
							<li key={link.id}>
								<SlideInRightWhenVisible>
									<Link
										href={link.href}
										className={`relative transition ${
											isActive
												? "text-primary after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-primary"
												: "hover:text-green-400"
										}`}>
										{link.label}
									</Link>
								</SlideInRightWhenVisible>
							</li>
						);
					})}
				</ul>

				{/* WhatsApp button aligned right */}

				<SlideInLeftWhenVisible>
					<a
						href="https://wa.me/+2348168090487"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white px-4 py-2 rounded-md flex items-center gap-2 font-medium group transition-all">
						<span className="rounded-full p-2 bg-primary transition-all group-hover:animate-pulse">
							<IoCall size={24} />
						</span>
						<span className="text-white transition-all group-hover:text-primary/80">
							Chat on WhatsApp
						</span>
					</a>
				</SlideInLeftWhenVisible>
			</nav>

			{/* Mobile navigation */}
			<nav className="md:hidden">
				<Sheet>
					<SheetTitle className="hidden" />
					<SheetTrigger asChild>
						<button aria-label="Open Menu">
							<GiHamburgerMenu size={24} />
						</button>
					</SheetTrigger>
					<SheetContent className="p-4 bg-gray-900 text-white">
						<ul className="flex flex-col gap-4 my-10 space-y-4 text-base font-medium">
							{navLinks.map((link) => {
								const isActive =
									pathName === link.href ||
									pathName.startsWith(`${link.href}/`);

								return (
									<li key={link.id}>
										<SlideInRightWhenVisible>
											<Link
												href={link.href}
												className={`${
													isActive ? "text-primary" : "hover:text-green-400"
												} transition`}>
												{link.label}
											</Link>
										</SlideInRightWhenVisible>
									</li>
								);
							})}

							{/* WhatsApp button */}
							<FadeInWhenVisible>
								<a
									href="https://wa.me/+2348168090487"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white py-2 rounded-md flex items-center gap-2 font-medium group transition-all">
									<span className="rounded-full p-2 bg-primary transition-all group-hover:animate-pulse">
										<IoCall size={24} />
									</span>
									<span className="text-white transition-all group-hover:text-primary/80">
										Chat on WhatsApp
									</span>
								</a>
							</FadeInWhenVisible>
						</ul>
					</SheetContent>
				</Sheet>
			</nav>
		</>
	);
}

export default function Header() {
	return (
		<header className="absolute top-0 left-0 right-0 max-w-7xl mx-auto px-6 py-6 z-20 text-white py-4 flex justify-between items-center">
			<div
				id="logo"
				className="text-2xl font-bold">
				<SlideInLeftWhenVisible>
					<Link href="./">
						<div className="relative">
							Prosmith
							<h1 className="text-primary absolute -top-[41px] left-[65px] md:-top-[43px]  md:left-[67px] text-6xl  ">
								.
							</h1>
						</div>
					</Link>
				</SlideInLeftWhenVisible>
			</div>

			<Navigation />
		</header>
	);
}
