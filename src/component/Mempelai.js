const Mempelai = () => {
	return (
		<div className=" bg-[url('./secondBg.jpg')] relative py-16 flex flex-col items-center justify-center ">
			<img
				src="Flower.png"
				alt=""
				className="bg-cover w-[40%] sm:w-[20%] right-0 rotate-180 top-0 absolute z-10"
			/>
			<div className="max-w-[75%] sm:container sm:mx-auto flex flex-col items-center p-10 justify-center space-y-6 z-30">
				<img className="w-[60%]" src="./bismillah.svg" alt="" />
				<span
					className="text-center font-bold text-slate-600 text-3xl "
					style={{ fontFamily: "Niconne" }}
				>
					{" "}
					Assalamu'alaikum Wr. Wb.
				</span>
				<span
					className="text-sm  text-center text-slate-600 mx-auto"
					style={{ fontFamily: "Poppins" }}
				>
					Tanpa mengurangi rasa hormat. Kami mengundang Bapak/Ibu/Saudara/i
					serta Kerabat sekalian untuk menghadiri acara pernikahan kami:
				</span>
				<div className="w-[80%] sm:w-[75%] bg-white rounded-lg drop-shadow-2xl border p-[6px] ">
					<div className="flex flex-col p-6 overflow-hidden justify-center items-center rounded-lg bg-[url('./secondBg.jpg')]">
						<img
							className=" drop-shadow-xl hover:scale-110 transition-all ease-in-out duration-300"
							src="./laki-laki.png"
							alt=""
						/>
						<span
							className="font-bold text-4xl text-slate-600"
							style={{ fontFamily: "Niconne" }}
						>
							Abdul Basits
						</span>
						<span className="flex flex-col items-center justify-center">
							<span
								className=" text-center text-xs sm:text-sm text-slate-600"
								style={{ fontFamily: "Poppins" }}
							>
								Putra dari pasangan Bapak M. Misar & Ibu Yuanah
							</span>
						</span>
					</div>
				</div>
				<div className="w-[80%] sm:w-[75%] bg-white rounded-lg drop-shadow-2xl border p-[6px] ">
					<div className="flex flex-col p-6 justify-center items-center rounded-lg bg-[url('./secondBg.jpg')]">
						<img
							className="drop-shadow-xl hover:scale-110 transition-all ease-in-out duration-300"
							src="./perempuan.png"
							alt=""
						/>
						<span
							className="font-bold text-4xl sm:text-6xl text-slate-600"
							style={{ fontFamily: "Niconne" }}
						>
							{" "}
							Anissa
						</span>
						<span className="flex flex-col items-center justify-center">
							<span
								className=" text-center text-xs sm:text-sm text-slate-600"
								style={{ fontFamily: "Poppins" }}
							>
								{" "}
								Putri dari pasangan Bapak Masduki Maslih & Ibu Wati
							</span>
						</span>
					</div>
				</div>
			</div>
			<img
				src="Flower.png"
				alt=""
				className="bg-cover w-[40%] sm:w-[20%] left-0  bottom-0 absolute z-10"
			/>
		</div>
	);
};

export default Mempelai;
