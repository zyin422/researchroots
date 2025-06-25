import React, { useEffect, useState } from "react";

interface Mentor {
	name: string;
	subject: string;
	img: string;
	bio: string;
}

const Mentors: React.FC = () => {
	const [mentors, setMentors] = useState<Mentor[]>([]);

	useEffect(() => {
		fetch("/mentors.json")
			.then((res) => res.json())
			.then(setMentors)
			.catch((err) => console.error("Failed to load mentors:", err));
	}, []);

	return (
		<div className="bg-color-1">
			<section className="container py-5" id="mentors">
				<h2 className="text-custom-green text-center mb-5">
					Meet Our Mentors
				</h2>
				<div className="row g-4 justify-content-center text-center">
					{mentors.map((mentor, index) => (
						<div key={index} className="col-12 col-md-6 col-lg-4">
							<div className="card h-100 shadow-sm">
								<img
									src={mentor.img}
									className="card-img-top rounded-circle"
									alt={mentor.name}
									style={{
										objectFit: "cover",
										height: "250px",
										width: "250px",
										margin: "0 auto",
										display: "block",
									}}
								/>
								<div className="card-body">
									<h5 className="card-title text-custom-green">
										{mentor.name}
									</h5>
									{mentor.subject && (
										<h6 className="card-subtitle mb-2 text-muted">
											{mentor.subject}
										</h6>
									)}
									<p className="card-text">{mentor.bio}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Mentors;
