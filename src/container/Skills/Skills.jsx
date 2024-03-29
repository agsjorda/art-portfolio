import "./Skills.scss";
import { useEffect, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import client, { urlFor } from "../../client";

const Skills = () => {
	const [skills, setSkills] = useState([]);
	const [experience, setExperience] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const query = '*[_type == "experiences"]';
				const skillsQuery = '*[_type == "skills"]';
				const data = await client.fetch(query);
				console.log(data);
				setExperience(data);
				const skillsData = await client.fetch(skillsQuery);
				console.log(skillsData);
				setSkills(skillsData);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);
	return (
		<>
			<h2 className="head-text">Skills & Experience</h2>
			<div className="app__skills-container">
				<motion.div className="app__skills-list">
					{skills?.map((skill) => (
						<motion.div
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 0.5 }}
							className="app__skills-item app__flex"
							key={skill.name}
						>
							<div
								className="app__flex"
								style={{ backgroundColor: skill.bgColor }}
							>
								<img src={urlFor(skill.icon)} alt={skill.name} />
							</div>
							<p className="p-text">{skill.name}</p>
						</motion.div>
					))}
				</motion.div>
				<motion.div className="app__skills-exp">
					{experience?.map((exp) => (
						<motion.div className="app__skills-exp-item" key={exp.year}>
							<div className="app__skills-exp-year">
								<p className="bold-text">{exp.year}</p>
							</div>
							<motion.div className="app__skills-exp-works">
								{exp.works.map((work) => (
									<>
										<motion.div
											whileInView={{ opacity: [0, 1] }}
											transition={{ duration: 0.5 }}
											className="app__skills-exp-work"
											data-tip
											data-for={work.name}
											key={work.name}
										>
											<h4
												className="bold-text"
												data-tooltip-id={work.name}
												data-tooltip-content={work.desc}
											>
												{work.name}
											</h4>
											<p className="p-text">{work.company}</p>
										</motion.div>
										<ReactTooltip id={work.name} className="skills-tooltip" />
									</>
								))}
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Skills, "app__skills"),
	"skills",
	"app__whitebg"
);
