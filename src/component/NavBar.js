import { useEffect, useState } from "react";
import { FaHeart, FaCalendar, FaImages, FaBookOpen } from "react-icons/fa";
import { MdLocationPin, MdMessage, MdMore } from "react-icons/md";
const NavBar = () => {
	const data = [
		{ title: "sampul" },
		{ title: "mempelai" },
		{ title: "acara" },
		{ title: "album" },
		{ title: "ucapan" },
	];

	const Icons = ({ title }) => {
		if (title === "sampul") return <FaBookOpen />;
		if (title === "mempelai") return <FaHeart />;
		if (title === "acara") return <FaCalendar />;
		if (title === "album") return <FaImages />;
		if (title === "ucapan") return <MdMessage />;
		return <FaBookOpen />;
	};
	return (
		<div
			className={` text-sm overflow-hidden bottom-0 flex justify-between space-x-4 px-2 flex-1 rounded-xl my-6 mx-auto bg-blue-500 `}
		>
			{data.map((data, index) => (
				<span
					key={index}
					// onClick={() => {
					// 	return setShow(false);
					// }}
					className={
						"py-4 flex flex-col text-white mx-auto items-center  capitalize cursor-pointer hover:bg-white/30 bg-blue-500 transition-all ease-in-out duration-300"
					}
				>
					<span className={``}>
						<Icons title={data.title} />
					</span>
					<span>{data.title}</span>
				</span>
			))}
		</div>
	);
};

export default NavBar;
