import React from "react";

const About: React.FC = () => {
	return (
		<section
			className="container my-5 d-flex flex-column flex-md-row align-items-center gap-4"
			id="about"
		>
			<div className="flex-fill">
				<h2 className="text-custom-green mb-3">Who Are We?</h2>
				<p>
					<strong>Research Roots</strong> is a student-focused
					research mentorship program that helps high school students
					dive into research aligned with their academic interests. We
					provide personalized mentorship, guidance on publishing or
					presenting research, and comprehensive college counseling —
					all at an affordable price compared to other companies.
				</p>
			</div>
			<img
				src="/researchroots.png"
				alt="About"
				className="img-fluid rounded"
				style={{ maxWidth: "50%" }}
			/>
		</section>
	);
};

export default About;
