import { useState } from "react";
import { FaBookOpen } from "react-icons/fa";

const Opening = () => {
	const [open, setOpen] = useState(false);

	return (
		<div
			className={`${
				open ? "translate-y-full opacity-0" : "translate-y-0 opacity-100 "
			} flex items-center justify-center min-h-screen w-full bg-white transition-all duration-500 ease-in-out`}
		>
			<img
				src="Flower.png"
				alt=""
				className="bg-cover w-[40%] sm:w-[20%] rotate-180 right-0 top-0 absolute z-10"
			/>
			<div className="flex flex-col items-center justify-center space-y-4 w-[75%]">
				<span className="sm:w-[30%]">
					<img src="./cover.png" className="drop-shadow-xl" alt="" />
				</span>
				<span
					className="text-slate-500 text-center text-5xl font-bold"
					style={{ fontFamily: "Niconne" }}
				>
					Basits & Anissa
				</span>
				<span
					className="text-slate-500 text-center  font-semibold"
					style={{ fontFamily: "Poppins" }}
				>
					Kepada Bapak/Ibu/Saudara/i
				</span>
				<span
					style={{ fontFamily: "Poppins" }}
					className="text-slate-500 text-sm text-center mx-auto w-full "
				>
					Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Kami.
				</span>
				<span
					onClick={() => setOpen(!open)}
					className="cursor-pointer hover:bg-blue-600 inline-flex items-center space-x-2 bg-blue-400 text-white px-4 py-2 rounded-full text-sm transition-all duration-300 ease-in-out"
				>
					<FaBookOpen />
					<span>Buka Undangan</span>
				</span>
			</div>
			<img
				src="Flower.png"
				alt=""
				className="bg-cover w-[40%] sm:w-[20%] left-0 bottom-0 absolute z-10"
			/>
		</div>
	);
};

export default Opening;
