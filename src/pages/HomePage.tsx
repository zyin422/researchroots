import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Mentors from "../components/Mentors";
import VideoGallery from "../components/VideoGallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

function HomePage() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Mentors />
			<VideoGallery />
			<Testimonials />
			<Contact />
		</>
	);
}

export default HomePage;
