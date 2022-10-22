const Template = ({ children }) => {
	return (
		<div className=" flex flex-col items-center justify-center ">
			<img
				src="Flower.png"
				alt=""
				className="bg-cover w-[40%] sm:w-[20%] right-0 rotate-180 top-0 absolute z-10"
			/>
			<div>{children}</div>
			<img
				src="Flower.png"
				alt=""
				className="bg-cover w-[40%] sm:w-[20%] left-0  bottom-0 absolute z-10"
			/>
		</div>
	);
};

export default Template;
