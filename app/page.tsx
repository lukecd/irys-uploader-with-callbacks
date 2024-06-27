import Image from "next/image";
import Link from "next/link";
import Uploader from "./components/Uploader";
export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="w-full md:w-1/2">
				<Uploader />
			</div>
		</main>
	);
}
