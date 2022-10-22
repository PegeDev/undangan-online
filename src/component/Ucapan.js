import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheck, FaExclamation } from "react-icons/fa";

const Ucapan = () => {
	const [data, setData] = useState([]);
	const [name, setName] = useState("");
	const [desc, setDesc] = useState("");
	const [status, setStatus] = useState("");
	const [err, setErr] = useState("");
	const handleSubmit = async () => {
		var data = {
			name: name,
			desc: desc,
			status: status,
		};
		if (name === "" || name === null)
			return setErr("Form Ucapanmu Belum Lengkap, Silakan Isi terlebih Dahulu");
		if (desc === "" || desc === null)
			return setErr("Form Ucapanmu Belum Lengkap, Silakan Isi terlebih Dahulu");
		if (status === "" || status === null)
			return setErr("Form Ucapanmu Belum Lengkap, Silakan Isi terlebih Dahulu");

		setName("");
		setDesc("");
		setStatus("");
		try {
			await axios.post("https://api.pegadev.xyz/ucapan", data);
			await getUcapan();
		} catch (err) {
			setErr(err.response.data.msg);
		}
	};

	const getUcapan = async () => {
		await axios
			.get("https://api.pegadev.xyz/ucapan")
			.then((res) => setData(res.data));
	};
	useEffect(() => {
		setTimeout(() => {
			setErr("");
		}, 3000);
	}, [err]);
	useEffect(() => {
		getUcapan();
	}, []);

	return (
		<div className=" bg-[url('./secondBg.jpg')] relative py-16 flex flex-col items-center justify-center min-h-screen">
			<img
				src="Flower.png"
				alt=""
				className="bg-cover w-[40%] sm:w-[20%] right-0 rotate-180 top-0 absolute z-10"
			/>
			<div className="max-w-[75%] sm:container sm:mx-auto flex flex-col p-10 space-y-6 z-30">
				<div className="p-[6px] rounded-lg drop-shadow-xl bg-white">
					<div className=" px-4 py-8 flex items-center justify-center bg-[url('./secondBg.jpg')] rounded-lg text-slate-600">
						<div className="flex flex-col  space-y-4 text-center w-full">
							<div className="flex flex-col text-center ">
								<span
									className="text-5xl sm:text-5xl font-bold text-slate-600"
									style={{ fontFamily: "Niconne" }}
								>
									Ucapkan Sesuatu
								</span>
								<span
									className=" text-sm font-semibold  text-slate-600"
									style={{ fontFamily: "Poppins" }}
								>
									Berikan Ucapan & Doa Restu
								</span>
							</div>
							<div className="space-y-4">
								<input
									type="text"
									value={name}
									onChange={(e) => setName(e.target.value)}
									placeholder="Tamu Undangan"
									className="rounded-lg w-full p-2  border border-slate-500"
								/>
								<textarea
									type="text"
									value={desc}
									onChange={(e) => setDesc(e.target.value)}
									placeholder="Berikan Ucapan dan Doa Restu"
									className="rounded-lg w-full h-[100px] text p-2 resize-none  border border-slate-500"
								/>
								<select
									value={status}
									onChange={(e) => setStatus(e.target.value)}
									className="rounded-lg w-full text p-2 resize-none  border border-slate-500"
								>
									<option selected value="">
										Konfirmasi Kehadiran
									</option>
									<option value="tidak">Tidak Hadir</option>
									<option value="hadir">Hadir</option>
								</select>

								<div className="flex flex-col justify-center items-center space-y-6">
									<button
										onClick={handleSubmit}
										className="bg-blue-500 text-white px-6 py-2 rounded-full"
									>
										Kirim Ucapan
									</button>
									{err && (
										<span className="text-xs w-full text-center text-red-500">
											*{err}
										</span>
									)}
								</div>
							</div>
							<div className="flex flex-col space-y-6 h-[300px] overflow-y-scroll no-scrollbar">
								{data.length > 0 ? (
									data.map((res, index) => (
										<div
											key={index}
											className="flex flex-col bg-white drop-shadow-xl w-full px-4 py-2 rounded-lg space-y-2"
										>
											<span className="float-left inline-flex items-center space-x-2 ">
												<span className="font-semibold">{res.name}</span>
												<span
													className={`inline-flex space-x-2 text-xs items-center justify-center ${
														res.status.toLowerCase() === "hadir"
															? "bg-slate-600"
															: "bg-red-500"
													} p-2 rounded-lg`}
												>
													{res.status.toLowerCase() === "hadir" ? (
														<FaCheck className=" text-white" />
													) : (
														<FaExclamation className=" text-white" />
													)}

													<span className=" text-white uppercase text-xs">
														{res.status.toLowerCase() === "tidak"
															? "Tidak Hadir"
															: "Hadir"}
													</span>
												</span>
											</span>
											<span className="float-left  inline-flex w-full ">
												{res.desc}
											</span>
										</div>
									))
								) : (
									<span className="text-red-500">Ucapan Tidak Ditemukan</span>
								)}
							</div>
						</div>
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

export default Ucapan;
