import React from "react";
import FaqItem from "./FaqItem";

const Faq: React.FC = () => {
	return (
		<section className="bg-white py-5" id="faq">
			<div className="container">
				<h2 className="text-center text-custom-green mb-4">
					Frequently Asked Questions
				</h2>

				<FaqItem
					question="What is Research Roots?"
					answer={
						<p>
							Research Roots is a student-focused research
							mentorship program that helps high school students
							dive into research aligned with their academic
							interests. We provide personalized mentorship,
							guidance on publishing or presenting research, and
							comprehensive college counseling — all at an
							affordable price compared to other companies.
						</p>
					}
				/>

				<FaqItem
					question="What makes Research Roots different from other programs?"
					answer={
						<ul className="mb-0">
							<li>
								💰 <strong>Affordable pricing</strong> —
								high-quality mentorship without the high cost.
							</li>
							<li>
								🎯{" "}
								<strong>Personalized research matching</strong>{" "}
								— we help you pursue research in the field
								you’re actually passionate about.
							</li>
							<li>
								🎓 <strong>College counseling included</strong>{" "}
								— guidance on building your college application,
								writing essays, and choosing schools.
							</li>
							<li>
								🧑‍🏫 <strong>Expert mentors</strong> — work with
								researchers and experienced professionals from
								top universities.
							</li>
						</ul>
					}
				/>
				<FaqItem
					question="Who is this program for?"
					answer={
						<ul className="mb-0">
							High school students (grades 8–12) who want to:
							<li>Conduct meaningful research</li>
							<li>Strengthen their college applications</li>
							<li>
								Work with a mentor in a specific academic area
							</li>
							<li>
								Gain clarity on their interests and future
								career paths
							</li>
						</ul>
					}
				/>

				<FaqItem
					question="What kinds of research can I do?"
					answer={
						<ul className="mb-0">
							We match you with mentors in a variety of fields,
							including:
							<li>STEM (science, tech, engineering, math)</li>
							<li>
								Social sciences (psychology, political science,
								economics)
							</li>
							<li>
								Humanities (history, literature, philosophy)
							</li>
							<li>
								Interdisciplinary areas (AI + ethics, medicine +
								policy, etc.)
							</li>
							<li className="mt-2">
								If you have a specific research topic in mind,
								we’ll help tailor a project to fit your goals.
							</li>
						</ul>
					}
				/>

				<FaqItem
					question="Do I need any research experience to join?"
					answer={
						<p>
							Not at all! Whether you're a complete beginner or
							already have some experience, we'll meet you where
							you are. Your mentor will guide you every step of
							the way.
						</p>
					}
				/>

				<FaqItem
					question="What does the college counseling include?"
					answer={
						<ul className="mb-0">
							<li>College list building</li>
							<li>Essay writing and editing</li>
							<li>Activity list and resume</li>
							<li>Recommendation strategy</li>
							<li>Interview prep</li>
							<li>Timeline management</li>
						</ul>
					}
				/>

				<FaqItem
					question="How long is the program?"
					answer={
						<p>
							Programs typically run from 8–16 weeks, depending on
							your schedule and project goals. We also offer
							flexible start dates to fit your school calendar.
						</p>
					}
				/>

				<FaqItem
					question="Will I be able to publish or present my research?"
					answer={
						<p>
							Yes! We help you explore publishing in high school
							journals, presenting at conferences, or submitting
							to competitions — depending on the strength and
							scope of your project.
						</p>
					}
				/>

				<FaqItem
					question="How much does it cost?"
					answer={
						<p>
							We pride ourselves on keeping costs lower than most
							other private research programs, with transparent
							pricing and flexible payment plans. Contact us for
							exact pricing based on your program length and
							goals.
						</p>
					}
				/>

				<FaqItem
					question="How do I get started?"
					answer={
						<p>
							Simply fill out our interest form or schedule a free
							consultation. We'll learn more about your interests,
							match you with a mentor, and outline a custom
							research + college success plan.
						</p>
					}
				/>
			</div>
		</section>
	);
};

export default Faq;
