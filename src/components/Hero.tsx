// src/components/Hero.tsx
import React from "react";

const Hero: React.FC = () => {
	return (
		<section
			className="bg-dark text-white d-flex align-items-center"
			style={{ height: "100vh" }}
		>
			<div className="container text-center">
				<h1 className="display-4 fw-bold">Research Roots</h1>
				<p className="lead">
					Empowering students to explore education and connect with
					research mentors.
				</p>
				<button className="btn btn-light">APPLY NOW</button>
			</div>
		</section>
	);
};

export default Hero;
