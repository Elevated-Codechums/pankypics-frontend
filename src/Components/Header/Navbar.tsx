import Link from "next/link";
import Instagram from "../../assets/instagram.svg";

export default function Navbar() {
	return (
		<div className="fixed z-50 top-0 left-0 w-full px-40 py-5">
			<div className="flex items-center justify-between px-10 py-1 bg-gray rounded-full text-white border border-white drop-shadow-md">
				<div className="">
					<Link href="/">
						<span className="font-qwitcher_grypen font-bold text-3xl">
							PankyPics
						</span>
					</Link>
				</div>
				<div className="font-raleway">
					<ul className="flex items-center gap-5">
						<li>
							<Link href="/myfav">
								<span className="">My Favourites</span>
							</Link>
						</li>
						<li>
							<Link href="/#about">
								<span className="">About</span>
							</Link>
						</li>
						<li>
							<Link href="/#albums">
								<span className="">Albums</span>
							</Link>
						</li>
						<li>
							<Link href="/#contact">
								<span className="">Contact</span>
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<Link href="/">
						<span className="">
							<Instagram />
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
