import "./About.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import client, { urlFor } from "../../client";
import { AppWrap } from "../../wrapper";

const About = () => {
	const [abouts, setAbouts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const query = '*[_type == "abouts"]';
				const data = await client.fetch(query);
				console.log(data);
				setAbouts(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<h2 className="head-text">
				I know That <span>Good Apps</span>
				<br />
				means<span> Good Business</span>
			</h2>
			<div className="app__profiles">
				{abouts.map((about, index) => (
					<motion.div
						whileDrag={{ opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.5, type: "tween" }}
						className="app__profile-item"
						key={about.title + index}
					>
						<img src={urlFor(about.imgUrl)} alt={about.title} />
						<h2 className="bold-text" style={{ marginTop: 20 }}>
							{about.title}
						</h2>
						<p className="p-text" style={{ marginTop: 10 }}>
							{about.description}
						</p>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default AppWrap(About, "about");
