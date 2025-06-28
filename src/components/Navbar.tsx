import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
	return (
		<nav className="navbar navbar-expand-md bg-custom-green px-4 py-2">
			<div className="container-fluid d-flex justify-content-between align-items-center">
				<div>
					<ul className="navbar-nav flex-row align-items-center gap-4 mb-0">
						<li className="nav-item">
							<Link
								to="/"
								className="navbar-brand d-flex align-items-center text-white"
							>
								<img
									src="/logo.png"
									alt="Logo"
									className="img-fluid"
									style={{
										width: "7vw",
										height: "auto",
									}}
								/>
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/team"
								className="nav-link text-white fw-semibold fs-5"
							>
								Team
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/ai"
								className="nav-link text-white fw-semibold fs-5"
							>
								AI
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="/contact"
								className="nav-link text-white fw-semibold fs-5"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<button className="btn btn-light fw-bold">APPLY</button>
			</div>
		</nav>
	);
};

export default Navbar;
