import React, { useState } from "react";

const videos = ["videos/video1.mp4", "videos/video2.mp4"];

const VideoGallery: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextVideo = () => {
		setCurrentIndex((prev) => (prev + 1) % videos.length);
	};

	const prevVideo = () => {
		setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
	};

	return (
		<section className="video-gallery-section bg-light py-5">
			<div className="d-flex flex-column container text-center justify-content-center">
				<h2 className="text-custom-green mb-4">Video Testimonials</h2>
				<div className="video-display justify-content-center">
					<video
						key={videos[currentIndex]}
						src={videos[currentIndex]}
						controls
						className="video"
					/>
				</div>
				<div className="video-controls">
					<button
						onClick={prevVideo}
						className="btn btn-secondary mx-2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-arrow-left"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
							/>
						</svg>
					</button>
					<button
						onClick={nextVideo}
						className="btn btn-secondary mx-2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-arrow-right"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	);
};

export default VideoGallery;
