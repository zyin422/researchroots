import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Mentors from "../components/Mentors";
import VideoGallery from "../components/VideoGallery";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Faq from "../components/Faq";

function HomePage() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Mentors />
			<VideoGallery />
			<Testimonials />
			<Pricing />
			<Faq />
			<Contact />
		</>
	);
}

export default HomePage;
