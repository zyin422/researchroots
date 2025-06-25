import React, { useEffect, useState } from "react";

interface Member {
	name: string;
	title: string;
	img: string;
	bio: string;
}

const Team: React.FC = () => {
	const [team, setTeam] = useState<Member[]>([]);

	useEffect(() => {
		fetch("/team.json")
			.then((res) => res.json())
			.then(setTeam)
			.catch((err) => console.error("Failed to load team:", err));
	}, []);

	return (
		<div className="bg-color-1">
			<section className="container py-5" id="team">
				<h2 className="text-custom-green text-center mb-5">
					Meet Our Team
				</h2>
				<div className="row g-4 justify-content-center text-center">
					{team.map((member, index) => (
						<div key={index} className="col-12 col-md-6 col-lg-4">
							<div className="card h-100 shadow-sm">
								<img
									src={member.img}
									className="card-img-top rounded-circle"
									alt={member.name}
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
										{member.name}
									</h5>
									{member.title && (
										<h6 className="card-subtitle mb-2 text-muted">
											{member.title}
										</h6>
									)}
									<p className="card-text">{member.bio}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default Team;
