import { Scales } from "@/components/ui/scales";

function ScalesWithImageDemo() {
	return (
		<div className="relative mx-auto flex w-full items-center justify-center overflow-hidden py-10 md:py-20">
			<div className="relative h-80 w-72 rounded-lg bg-gray-100 dark:bg-neutral-800/50">
				<div className="absolute -inset-y-[30%] -left-10 h-[160%] w-8 mask-t-from-90% mask-b-from-90%">
					<Scales size={8} className="rounded-lg" />
				</div>
				<div className="absolute -inset-y-[30%] -right-10 h-[160%] w-8 mask-t-from-90% mask-b-from-90%">
					<Scales size={8} className="rounded-lg" />
				</div>
				<div className="absolute -inset-x-[30%] -top-10 h-8 w-[160%] mask-r-from-90% mask-l-from-90%">
					<Scales size={8} className="rounded-lg" />
				</div>
				<div className="absolute -inset-x-[30%] -bottom-10 h-8 w-[160%] mask-r-from-90% mask-l-from-90%"></div>
			</div>
		</div>
	);
}

export default function ScalesProxy() {
	return <ScalesWithImageDemo />;
}
