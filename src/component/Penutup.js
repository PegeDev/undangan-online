import { FaCheck, FaHeart } from "react-icons/fa";
import Footer from "./Footer";

const Penutup = () => {
	return (
		<div className=" relative flex flex-col items-center justify-center min-h-screen bg-[url('./secondBg.jpg')]">
			<div className="w-full relative bg-gradient-to-t  from-slate-200  to-transparent">
				<img
					src="Flower.png"
					alt=""
					className="bg-cover w-[40%] opacity-80 sm:w-[40%] right-0 -scale-x-100 bottom-0 absolute z-10"
				/>
				<div className="sm:container sm:mx-auto flex flex-col p-10 space-y-6 ">
					<div className="relative p-[6px] flex flex-col rounded-lg items-center z-40">
						<div className="flex flex-col items-center ">
							<img
								className=" drop-shadow-xl max-w-[70%] z-40"
								src="./cover.png"
								alt=""
							/>
							<div className="flex flex-col space-y-6 items-center ">
								<span
									className="max-w-[50%] text-center text-slate-600"
									style={{ fontFamily: "Poppins" }}
								>
									Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
									Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
									Atas kehadiran dan doa restunya, kami mengucapkan terima
									kasih.
								</span>
								<span
									className="font-bold text-3xl sm:text-4xl text-center text-slate-600"
									style={{ fontFamily: "Kaushan Script" }}
								>
									Wassalamu'alaikum Wr. Wb.
								</span>
								<span className="w-[50%] flex justify-center items-center space-x-2">
									<span className=" w-[50%] border-t-[0.38rem] border-slate-600"></span>
									<FaHeart className="text-3xl text-slate-600" />
									<hr className="w-[50%]  border-t-[0.38rem] border-slate-600" />
								</span>
								<span
									className="font-bold text-3xl sm:text-5xl text-center italic text-slate-600"
									style={{ fontFamily: "Niconne" }}
								>
									Basits & Anisa
								</span>
							</div>
						</div>
					</div>
				</div>
				<img
					src="Flower.png"
					alt=""
					className="bg-cover w-[40%] opacity-80 sm:w-[40%] left-0  bottom-0 absolute z-10"
				/>
			</div>
			<div className="border-t-4 border-slate-600 bg-gradient-to-t from-slate-400 flex justify-center min-h-[180px] w-full  p-6">
				<span
					style={{ fontFamily: "Poppins" }}
					className="inline-flex justify-center space-x-2 text-slate-600  "
				>
					<span className="font-semibold">Made With</span>
					<FaHeart />
					<span className="font-semibold">by</span>
					<span className="font-bold"> PegaDev</span>
				</span>
			</div>
		</div>
	);
};

export default Penutup;
