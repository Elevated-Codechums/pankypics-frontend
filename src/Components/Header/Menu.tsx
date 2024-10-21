import Link from 'next/link'

export default function Menu() {
	return (
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
	)
}
