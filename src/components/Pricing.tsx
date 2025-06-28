import React from "react";

const pricingPlans = [
	{
		title: "Starter Mentorship",
		price: "$40 /month",
		description:
			"Best for students seeking consistent guidance on a budget.",
		features: [
			"Monthly check-ins with a mentor",
			"Basic project and academic support",
			"Email support",
			"Access to select mentorship resources",
		],
		button: "Choose Starter Mentorship",
	},
	{
		title: "Mentorship & Passion",
		price: "$450 /one-time",
		description:
			"Ideal for students looking to explore interests with ongoing mentor support.",
		features: [
			"Everything in Starter Mentorship",
			"Tailored mentor matching based on student’s goals",
			"Project development guidance",
			"Monthly 1-on-1 mentorship sessions (45 min)",
			"Unlimited Q&A via email",
			"Personalized growth plan",
		],
		button: "Choose Mentorship & Passion",
	},
	{
		title: "Passion Project / Research",
		price: "$397 /one-time",
		description:
			"Designed for students aiming to build a standout research or passion project.",
		features: [
			"Passion project design + timeline",
			"Expert feedback on project ideas",
			"Research guidance (topic selection to execution)",
			"Final project review and feedback",
			"Access to sample successful projects",
		],
		button: "Choose Passion Project / Research",
	},
];

const Pricing: React.FC = () => {
	return (
		<section className="bg-color-1 py-5" id="pricing">
			<div className="container text-center">
				<h2 className="text-custom-green mb-5">Mentorship Plans</h2>
				<div className="row justify-content-center g-4">
					{pricingPlans.map((plan, index) => (
						<div key={index} className="col-12 col-md-6 col-lg-4">
							<div className="card h-100 shadow-sm p-3 mx-3">
								<div className="card-body d-flex flex-column">
									<h4 className="text-custom-green">
										{plan.title}
									</h4>
									<h5 className="text-muted mb-3">
										{plan.price}
									</h5>
									<p>{plan.description}</p>
									<ul className="text-start mb-4">
										{plan.features.map((feature, i) => (
											<li key={i}>✓ {feature}</li>
										))}
									</ul>
									<button className="btn btn-custom-green mt-auto">
										{plan.button}
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;
