import React from "react";

const quotes = [
	["Through Research Roots, I found my passion for research.", "Jiwoo Park"],
	[
		"I connected with a mentor who lent me guidance along my research journey.",
		"Alejandra Lopez Hernandez",
	],
	["Research Roots gave me confidence for my future.", "Tyler James Carter"],
];

const Testimonials: React.FC = () => {
	return (
		<section className="bg-white py-5" id="testimonials">
			<div className="container text-center">
				<h2 className="text-custom-green mb-4">Student Testimonials</h2>
				<div className="overflow-hidden">
					<div className="testimonial-marquee">
						{quotes.map((quote, i) => (
							<div key={i} className="testimonial-item">
								<p>"{quote[0]}"</p>
								<span className="d-block mt-3">
									— {quote[1]}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
