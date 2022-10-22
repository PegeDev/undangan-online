import { FaHeart } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="bg-slate-400 w-full">
			<span className="inline-flex items-center ">
				<span>Made With</span>
				<FaHeart />
				<span>by PegaDev</span>
			</span>
		</div>
	);
};

export default Footer;
