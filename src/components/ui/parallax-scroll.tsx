"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export const ParallaxScroll = ({ images, className }: { images: string[]; className?: string }) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -100]);
	const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 300]);

	const half = Math.ceil(images.length / 2);

	const firstPart = images.slice(0, half);
	const secondPart = images.slice(half);

	return (
		<div className={cn("h-full w-full overflow-hidden", className)} ref={containerRef}>
			<div className="grid grid-cols-2 items-start gap-3 px-3">
				<div className="grid gap-3">
					{firstPart.map((el, idx) => (
						<motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
							<img
								src={el}
								className="h-72 w-full object-cover object-top rounded-lg !m-0 !p-0"
								height="400"
								width="400"
								alt="thumbnail"
							/>
						</motion.div>
					))}
				</div>
				<div className="grid gap-3 mt-20">
					{secondPart.map((el, idx) => (
						<motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
							<img
								src={el}
								className="h-72 w-full object-cover object-left-top rounded-lg !m-0 !p-0"
								height="400"
								width="400"
								alt="thumbnail"
							/>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};
