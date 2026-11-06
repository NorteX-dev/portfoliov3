import { Fragment, useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "./utils";

const FlipWords = ({
	words,
	duration = 3000,
	className,
}: {
	words: string[];
	duration?: number;
	className?: string;
}) => {
	const [currentWord, setCurrentWord] = useState(words[0]);
	const [isAnimating, setIsAnimating] = useState<boolean>(false);

	const startAnimation = useCallback(() => {
		const word = words[words.indexOf(currentWord) + 1] || words[0];
		setCurrentWord(word);
		setIsAnimating(true);
	}, [currentWord, words]);

	useEffect(() => {
		if (!isAnimating)
			setTimeout(() => {
				startAnimation();
			}, duration);
	}, [isAnimating, duration, startAnimation]);

	return (
		<AnimatePresence
			onExitComplete={() => {
				setIsAnimating(false);
			}}
		>
			<motion.div
				initial={{
					opacity: 0,
					y: 10,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 0.4,
					ease: "easeInOut",
					type: "spring",
					stiffness: 100,
					damping: 10,
				}}
				exit={{
					opacity: 0,
					filter: "blur(8px)",
					scale: 1.2,
					position: "absolute",
				}}
				className={cn("z-10 inline-block relative text-left text-white pr-1", className)}
				key={currentWord}
			>
				{currentWord.split(" ").map((word, wordIndex, words) => {
					const offset = words.slice(0, wordIndex).join(" ").length + (wordIndex > 0 ? 1 : 0);
					return (
						<Fragment key={currentWord + wordIndex}>
							<span className="inline-block whitespace-nowrap">
								{word.split("").map((letter, letterIndex) => (
									<motion.span
										key={currentWord + (offset + letterIndex)}
										initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
										animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
										transition={{
											delay: (offset + letterIndex) * 0.08,
											duration: 0.4,
										}}
										className="inline-block"
									>
										{letter}
									</motion.span>
								))}
							</span>
							{wordIndex < words.length - 1 && " "}
						</Fragment>
					);
				})}
			</motion.div>
		</AnimatePresence>
	);
};

export default function FlipWordsProxy({ words, className }: { words: string[]; className?: string }) {
	return <FlipWords words={words} className={className} />;
}
