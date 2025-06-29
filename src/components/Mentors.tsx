import React from "react";

const highlights = [
	{
		icon: "bi bi-mortarboard",
		title: "Top Academic Honors",
		description:
			"National STEM awards, AI and biomedical publications, and research under professors from UC Berkeley, USC, and Harvard.",
	},
	{
		icon: "bi bi-lightbulb",
		title: "Founders & Innovators",
		description:
			"Startups in neurotech, environmental advocacy, and global nonprofits — featured in national media and backed by institutions.",
	},
	{
		icon: "bi bi-briefcase",
		title: "Professional Experience",
		description:
			"Consulted for Samsung and IKEA, interned at venture firms, and led brand and strategy at high-growth startups.",
	},
	{
		icon: "bi bi-diagram-3",
		title: "Interdisciplinary Strength",
		description:
			"Expertise across CS, neuroscience, business, bioengineering, and public policy. Mentors guide complex, cross-cutting projects.",
	},
	{
		icon: "bi bi-globe",
		title: "Global Impact",
		description:
			"Led international teams with 250+ volunteers, earned '20 Under 20' honors, and impacted students across multiple continents.",
	},
];

const Mentors: React.FC = () => {
	return (
		<div className="bg-color-1 py-5" id="mentors">
			<section className="container text-center">
				<h2 className="text-custom-green mb-5">Our Mentors</h2>
				<div className="row g-4 justify-content-center">
					{highlights.map((item, index) => (
						<div key={index} className="col-12 col-md-6 col-lg-4 ">
							<div className="card h-100 shadow-sm p-4">
								<div className="text-custom-green mb-3 fs-1">
									<i className={item.icon}></i>
								</div>
								<h5 className="fw-bold">{item.title}</h5>
								<p className="text-muted">{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Mentors;
