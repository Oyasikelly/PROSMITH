"use client";

import { Loader2 } from "lucide-react"; // from lucide-react, already works well with Tailwind

export default function Loading({ text = "Loading..." }: { text?: string }) {
	return (
		<div className="absolute top-0 left-0 right-0 bg-black/40 z-40 rounded-lg h-full flex items-center justify-center gap-2 text-blue-600">
			<Loader2 className="h-5 w-5 animate-spin" />
			<span>{text}</span>
		</div>
	);
}
