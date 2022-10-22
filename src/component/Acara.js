const Acara = () => {
	return (
		<div className=" bg-[url('./secondBg.jpg')] relative py-16 min-h-screen flex flex-col items-center justify-center ">
			<img
				src="Flower.png"
				alt=""
				className="bg-cover w-[40%] sm:w-[20%] right-0 rotate-180 top-0 absolute z-10"
			/>
			<div className="max-w-[75%] sm:container sm:mx-auto flex flex-col p-10 space-y-6 z-30">
				<div className="p-[6px] rounded-lg drop-shadow-xl bg-white">
					<div className=" p-4 flex items-center justify-center bg-[url('./secondBg.jpg')] rounded-lg text-slate-600">
						<div className="flex flex-col  space-y-2 text-center mx-auto">
							<span
								className="text-4xl sm:text-5xl italic font-bold"
								style={{ fontFamily: "Niconne" }}
							>
								Akad Nikah
							</span>

							<span className="flex flex-col justify-center items-center">
								<span
									className=" text-sm font-semibold"
									style={{ fontFamily: "Poppins" }}
								>
									Sabtu, 29 Oktober 2022
								</span>

								<span className=" text-xs" style={{ fontFamily: "Poppins" }}>
									Pukul 10.00 WIB s/d Selesai
								</span>
								<span
									className=" text-xs flex flex-col  sm:w-[50%]"
									style={{ fontFamily: "Poppins" }}
								>
									Alamat : Jl. Bambu Kuning, RT.003/RW.007, Marga Mulya, Kec.
									Bekasi Utara, Kota Bekasi
								</span>
							</span>
						</div>
					</div>
				</div>
				<div className=" p-[6px] rounded-lg drop-shadow-xl bg-white">
					<div className=" p-4 flex items-center justify-center bg-[url('./secondBg.jpg')] rounded-lg text-slate-600">
						<div className="flex flex-col  space-y-2 text-center mx-auto">
							<span
								className="text-4xl sm:text-5xl italic font-bold"
								style={{ fontFamily: "Niconne" }}
							>
								Resepsi
							</span>

							<span className="flex flex-col  justify-center items-center">
								<span
									className="text-sm font-semibold"
									style={{ fontFamily: "Poppins" }}
								>
									Sabtu, 29 Oktober 2022
								</span>

								<span className="text-xs" style={{ fontFamily: "Poppins" }}>
									Pukul 10.00 WIB s/d Selesai
								</span>
								<span
									className=" text-xs flex flex-col w-full sm:w-[50%]"
									style={{ fontFamily: "Poppins" }}
								>
									Alamat : Jl. Bambu Kuning, RT.003/RW.007, Marga Mulya, Kec.
									Bekasi Utara, Kota Bekasi
								</span>
							</span>
						</div>
					</div>
				</div>
				<div className=" p-[6px] rounded-lg drop-shadow-xl bg-white">
					<div className="flex flex-col space-y-2 py-4 items-center justify-center text-center bg-[url('./secondBg.jpg')] px-4 rounded-lg text-slate-600">
						<span
							className="w-full text-4xl sm:text-5xl italic font-bold"
							style={{ fontFamily: "Niconne" }}
						>
							Lokasi
						</span>

						<iframe
							className="w-full rounded-lg h-[300px]"
							src="https://www.google.com/maps/d/embed?mid=1KnfhUWJxUvOocFtIlyI8VP8laSfJmqo&ll=-6.231548000000008%2C107.00465909999998&z=17"
						></iframe>
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

export default Acara;
