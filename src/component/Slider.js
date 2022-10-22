import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider() {
	const images = [
		{ img: "./album/basits&anissa-1.jpg", title: "Bassits & Annisa 1" },
		{ img: "./album/basits&anissa-2.jpg", title: "Bassits & Annisa 2" },
		{ img: "./album/basits&anissa-3.jpg", title: "Bassits & Annisa 3" },
		{ img: "./album/basits&anissa-4.jpg", title: "Bassits & Annisa 4" },
		{ img: "./album/basits&anissa-5.jpg", title: "Bassits & Annisa 5" },
		{ img: "./album/basits&anissa-6.jpg", title: "Bassits & Annisa 6" },
	];
	return (
		<div className="w-full rounded-lg bg-white p-[6px]">
			<div className="rounded-lg bg-[url('./secondBg.jpg')] p-4 space-y-4">
				<div className="w-full flex items-center justify-center">
					<span
						className="font-bold text-4xl sm:text-5xl text-slate-600"
						style={{ fontFamily: "Niconne" }}
					>
						Album
					</span>
				</div>
				<div className="w-full">
					<Carousel
						autoPlay
						infiniteLoop
						interval={3000}
						showStatus={false}
						ariaLabel={false}
						className="rounded-lg overflow-hidden shadow-xl"
					>
						{images.length > 0 &&
							images.map((data, index) => (
								<div key={index}>
									<img src={data.img} />
								</div>
							))}
					</Carousel>
				</div>
			</div>
		</div>
	);
}
