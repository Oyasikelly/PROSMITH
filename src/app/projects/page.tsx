import ProjectsPage from "@/components/projects/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects",
};
export default function Projects() {
	return <ProjectsPage />;
}
