import { useEffect, useState } from "react";

const Timer = ({ end }) => {
	const [expiryTime, setExpiryTime] = useState("29 Oct 2022 08:00:00");
	const [countdownTime, setCountdownTime] = useState({
		countdownDays: "",
		countdownHours: "",
		countdownMinutes: "",
		countdownSeconds: "",
	});

	function countdownTimer() {
		const countdownDateTime = new Date(expiryTime).getTime();
		const currentTime = new Date().getTime();
		const remainingDayTime = countdownDateTime - currentTime;
		const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
		const totalHours = Math.floor(
			(remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const totalMinutes = Math.floor(
			(remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
		);
		const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

		const runningCountdownTime = {
			countdownDays: totalDays,
			countdownHours: totalHours,
			countdownMinutes: totalMinutes,
			countdownSeconds: totalSeconds,
		};
		setCountdownTime(runningCountdownTime);
	}
	console.log();
	useEffect(() => {
		const i = setInterval(countdownTimer, 1000);
		return () => clearInterval(i);
	}, []);
	return (
		<div className="inline-flex space-x-4 ">
			<span
				className="flex flex-col text-center py-2 px-4 rounded-lg bg-slate-500 text-white"
				style={{ fontFamily: "Poppins" }}
			>
				<span className="font-bold text-xl">
					{String(countdownTime.countdownDays).length === 1
						? "0" + countdownTime.countdownDays
						: countdownTime.countdownDays}
				</span>
				<span className="text-xs font-semibold">Hari</span>
			</span>
			<span
				className="flex flex-col text-center py-2 px-4 rounded-lg bg-slate-500 text-white"
				style={{ fontFamily: "Poppins" }}
			>
				<span className="font-bold text-xl">
					{String(countdownTime.countdownHours).length === 1
						? "0" + countdownTime.countdownHours
						: countdownTime.countdownHours}{" "}
				</span>
				<span className="text-xs font-semibold">Jam</span>
			</span>
			<span
				className="flex flex-col text-center py-2 px-4 rounded-lg bg-slate-500 text-white"
				style={{ fontFamily: "Poppins" }}
			>
				<span className="font-bold text-xl">
					{String(countdownTime.countdownMinutes).length === 1
						? "0" + countdownTime.countdownMinutes
						: countdownTime.countdownMinutes}
				</span>
				<span className="text-xs font-semibold">Menit</span>
			</span>
			<span
				className="flex flex-col text-center py-2 px-4 rounded-lg bg-slate-500 text-white"
				style={{ fontFamily: "Poppins" }}
			>
				<span className="font-bold text-xl">
					{String(countdownTime.countdownSeconds).length === 1
						? "0" + countdownTime.countdownSeconds
						: countdownTime.countdownSeconds}
				</span>
				<span className="text-xs font-semibold">Detik</span>
			</span>
		</div>
	);
};

export default Timer;
