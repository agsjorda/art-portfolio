import { useEffect, useState } from "react";
import "./Work.scss";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { animate, motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import client, { urlFor } from "../../client";

const Work = () => {
	const [activeFilter, setActiveFilter] = useState("All");
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

	const [works, setWorks] = useState([]);
	const [filterWork, setFilterWork] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const query = '*[_type == "works"]';
				const data = await client.fetch(query);
				console.log(data);
				setWorks(data);
				setFilterWork(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	const handleWorkFilter = (item) => {};
	return (
		<>
			<h2 className="head-text">
				My Creative <span>Portfolio</span>
				Section
			</h2>
			<div className="app__work-filter">
				{["UI/UX", "Web App", "Mobile App", "React Js", "All"].map(
					(item, index) => (
						<div
							key={index}
							onClick={() => handleWorkFilter(item)}
							className={`app__work-filter-item app__flex p-text ${
								activeFilter === item ? "item-active" : ""
							}`}
						>
							{item}
						</div>
					)
				)}
			</div>
			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.4 }}
				className="app__work-portfolio"
			>
				{filterWork.map((work, index) => (
					<div className="app__work-item app__flex" key={index}>
						<div className="app__work-img app__flex">
							<img src={urlFor(work.imgUrl)} alt={work.name} />
						</div>
					</div>
				))}
			</motion.div>
		</>
	);
};

export default Work;
