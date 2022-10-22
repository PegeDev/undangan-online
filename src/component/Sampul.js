import Timer from "./Timer";

const Sampul = () => {
	return (
		<div className="min-h-screen relative flex flex-col items-center justify-center py-16  bg-[url('./secondBg.jpg')]">
			<img
				src="Flower.png"
				alt=""
				className="bg-cover w-[40%] sm:w-[20%] rotate-180 right-0 top-0 absolute z-10"
			/>
			<div className="max-w-[75%] sm:container sm:mx-auto flex flex-col items-center justify-center  rounded-lg">
				<span
					className="z-30 drop-shadow-xl text-slate-600 text-center text-4xl font-extrabold w-full "
					style={{ fontFamily: "Niconne", fontWeight: 900 }}
				>
					- The Wedding Of -
				</span>
				<span className="">
					<img
						className="drop-shadow-xl hover:scale-110 transition-all ease-in-out duration-300"
						src="./cover.png"
						alt=""
					/>
				</span>
				<div className="mx-auto flex flex-col space-y-2">
					<span className="w-full h-[0.2rem] bg-slate-600" />
					<span
						className="text-5xl text-slate-600"
						style={{ fontFamily: "Niconne" }}
					>
						Basits & Anissa
					</span>
					<span className="w-full h-[0.2rem] bg-slate-600" />
				</div>
				<div className=" flex flex-col items-center justify-center my-10 space-y-4 z-30">
					<span className="px-8 text-sm text-slate-600 text-center mx-auto">
						Kami berharap Anda menjadi bagian dari hari istimewa kami!
					</span>
					<Timer />
				</div>
			</div>
			<img
				src="Flower.png"
				alt=""
				className="bg-cover w-[40%] sm:w-[20%] left-0 bottom-0 absolute z-10"
			/>
		</div>
	);
};

export default Sampul;
