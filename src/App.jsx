import "./App.scss";
import "react-tooltip/dist/react-tooltip.css";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";

function App() {
	return (
		<div className="app">
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			<Testimonial />
			<Footer />
		</div>
	);
}

export default App;
