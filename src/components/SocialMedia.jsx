import { AiFillGithub } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

const SocialMedia = () => {
	return (
		<div className="app__social">
			<div>
				<a href="https://github.com/agsjorda" target="_blank" rel="noreferrer">
					<AiFillGithub />
				</a>
			</div>
			<div>
				<a
					href="https://www.instagram.com/sziehro/"
					target="_blank"
					rel="noreferrer"
				>
					<BsInstagram />
				</a>
			</div>
			<div>
				<a
					href="https://www.linkedin.com/in/arthur-gerald-jorda-b949483b/"
					target="_blank"
					rel="noreferrer"
				>
					<FiLinkedin />
				</a>
			</div>
			<div>
				<a
					href="https://www.facebook.com/akintofesbook/ "
					target="_blank"
					rel="noreferrer"
				>
					<FaFacebookF />
				</a>
			</div>
		</div>
	);
};

export default SocialMedia;
