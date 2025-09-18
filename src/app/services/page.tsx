import ServicePage from "@/components/services/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Services",
};
export default function Services() {
	return <ServicePage />;
}
