import { useEffect, useRef, useState } from "react";
import Mempelai from "./component/Mempelai";
import NavBar from "./component/NavBar";
import Sampul from "./component/Sampul";
import {
	FaBookOpen,
	FaCalendar,
	FaHeart,
	FaImages,
	FaPause,
	FaPlay,
} from "react-icons/fa";
import Acara from "./component/Acara";
import Album from "./component/Album";
import Ucapan from "./component/Ucapan";
import Penutup from "./component/Penutup";
import { MdMessage } from "react-icons/md";

function App() {
	const [open, setOpen] = useState(false);
	const sampulSection = useRef(null);
	const mempelaiSection = useRef(null);
	const acaraSection = useRef(null);
	const albumSection = useRef(null);
	const ucapanSection = useRef(null);
	const penutupSection = useRef(null);
	const audio = useRef(new Audio("./audio/AKAD-Payung Teduh.mp3"));

	const [playing, setPlaying] = useState(false);

	const PlayPauseAudio = () => {
		if (playing) {
			audio.current.loop = true;
			audio.current.play();
		} else {
			audio.current.pause();
		}
	};
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
	const scrollDown = (ref) => {
		window.scrollTo({
			top: ref.current.offsetTop,
			behavior: "smooth",
		});
	};
	useEffect(() => {
		PlayPauseAudio();
	}, [playing]);

	useEffect(() => {
		document.title = "Basits & Anisaa";
	});

	return (
		<div className="">
			<div
				className={`relative container mx-auto max-w-[1000px] m-auto ${
					open && "overflow-hidden"
				}`}
			>
				<div className="absolute z-50 min-h-screen">
					<div
						className={`${
							open
								? "-translate-y-full opacity-100"
								: "translate-y-0 opacity-100 "
						}   flex items-center justify-center min-h-screen  transition-all duration-300 ease-in-out bg-[url('./secondBg.jpg')]`}
					>
						<img
							src="Flower.png"
							alt=""
							className="bg-cover w-[40%] sm:w-[20%] rotate-180 right-0 top-0 absolute z-10"
						/>
						<div className="max-w-[80%] flex flex-col items-center justify-center space-y-4 container">
							<span className="">
								<img
									className="drop-shadow-xl hover:scale-110 transition-all ease-in-out duration-300"
									src="./cover.png"
									alt=""
								/>
							</span>
							<span
								className="text-slate-600 text-center text-5xl font-bold"
								style={{ fontFamily: "Poppins" }}
							>
								Basits & Anissa
							</span>
							<span
								className="text-slate-600 text-center  font-semibold"
								style={{ fontFamily: "Poppins" }}
							>
								Kepada Bapak/Ibu/Saudara/i
							</span>
							<span
								style={{ fontFamily: "Poppins" }}
								className="text-slate-600 text-sm text-center mx-auto w-full "
							>
								Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Kami.
							</span>
							<span
								onClick={(e) => {
									e.preventDefault();
									setOpen(!open);
									setPlaying(!playing);
								}}
								className="cursor-pointer hover:bg-slate-600 inline-flex items-center space-x-2 bg-slate-400 text-white px-4 py-2 rounded-full text-sm transition-all duration-300 ease-in-out"
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
				</div>
				{open && (
					<div className=" flex flex-col items-center justify-center  overflow-hidden">
						<div className="flex flex-col">
							<section ref={sampulSection}>
								<Sampul />
							</section>
							<section ref={mempelaiSection}>
								<Mempelai />
							</section>
							<section ref={acaraSection}>
								<Acara />
							</section>
							<section ref={albumSection}>
								<Album />
							</section>
							<section ref={ucapanSection}>
								<Ucapan />
							</section>
							<section ref={penutupSection}>
								<Penutup />
							</section>
						</div>
						<div className="max-w-[1000px] w-full fixed px-4  bottom-32  z-30">
							<button
								className="bg-slate-500 float-right text-white h-10 w-10 rounded-full flex"
								onClick={(e) => {
									e.preventDefault();
									setPlaying(!playing);
								}}
							>
								{playing ? (
									<FaPause className="m-auto" />
								) : (
									<FaPlay className="m-auto" />
								)}
							</button>
						</div>
						<div className="bottom-0 fixed z-50">
							<div
								className={` text-sm bottom-0 flex justify-between space-x-4 px-2 flex-1 rounded-xl my-6  bg-slate-500 `}
							>
								{data.map((data, index) => (
									<span
										key={index}
										onClick={() => {
											data.title === "sampul" && scrollDown(sampulSection);
											data.title === "mempelai" && scrollDown(mempelaiSection);
											data.title === "acara" && scrollDown(acaraSection);
											data.title === "album" && scrollDown(albumSection);
											data.title === "ucapan" && scrollDown(ucapanSection);
											data.title === "penutup" && scrollDown(penutupSection);
										}}
										className={
											"py-4 flex flex-col text-white mx-auto items-center  capitalize cursor-pointer hover:bg-white/30 bg-slate-500 transition-all ease-in-out duration-300"
										}
									>
										<span className={``}>
											<Icons title={data.title} />
										</span>
										<span>{data.title}</span>
									</span>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
