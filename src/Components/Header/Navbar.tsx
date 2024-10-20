import Link from 'next/link';


export default function Navbar() {
	return (
		<div className='fixed top-0 left-0'>
			<Link href="/">Home</Link>
			<Link href="/admin">Admin Panel</Link>
			<Link href="/admin/login">Login Page</Link>
		</div>
	);
}
