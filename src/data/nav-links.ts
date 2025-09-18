export interface NavLink {
	id: number;
	label: string;
	href: string;
}

const links = [
	{ label: "Home", href: "/", id: 1 },
	{ label: "Services", href: "/services", id: 2 },
	{ label: "Projects", href: "/projects", id: 3 },
	{ label: "Contact", href: "/contact", id: 4 },
];

export const navLinks: NavLink[] = [...links];
