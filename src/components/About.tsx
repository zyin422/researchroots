import React from "react";

const About: React.FC = () => {
	return (
		<section
			className="container my-5 d-flex flex-column flex-md-row align-items-center gap-4"
			id="about"
		>
			<div className="flex-fill">
				<h2 className="text-custom-green mb-3">About Us</h2>
				<p>
					Our mission is to empower students by providing more
					affordable high quality research opportunities that promote
					academic growth and real world experience. We strive to
					break financial barriers so that every dedicated student can
					thrive and gain experience in their field of interest.
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
