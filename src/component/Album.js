import Slider from "./Slider";

const Album = () => {
	return (
		<div className=" bg-[url('./secondBg.jpg')] relative min-h-screen py-16 flex flex-col items-center justify-center ">
			<img
				src="Flower.png"
				alt=""
				className="bg-cover w-[40%] sm:w-[20%] right-0 rotate-180 top-0 absolute z-10"
			/>
			<div className="max-w-[65%] flex flex-col w-full items-center justify-center py-18 space-y-4 z-30">
				<Slider />
			</div>
			<img
				src="Flower.png"
				alt=""
				className="bg-cover w-[40%] sm:w-[20%] left-0  bottom-0 absolute z-10"
			/>
		</div>
	);
};

export default Album;
