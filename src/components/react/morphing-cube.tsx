import { useEffect, useRef } from "react";

const shapes = [
	{ w: 120, h: 120, r: 24, x: 0, y: 0 },
	{ w: 80, h: 80, r: 40, x: 140, y: 20 },
	{ w: 100, h: 60, r: 16, x: 60, y: 150 },
	{ w: 60, h: 100, r: 30, x: 200, y: 130 },
	{ w: 90, h: 90, r: 20, x: 160, y: 80 },
];

type ShapeAnim = {
	rotateX: number;
	rotateY: number;
	rotateZ: number;
	translateZ: number;
	targetRX: number;
	targetRY: number;
	targetRZ: number;
	targetTZ: number;
	speed: number;
};

function MorphingCube() {
	const containerRef = useRef<HTMLDivElement>(null);
	const animRef = useRef<ShapeAnim[]>(
		shapes.map(() => ({
			rotateX: Math.random() * 360,
			rotateY: Math.random() * 360,
			rotateZ: Math.random() * 360,
			translateZ: Math.random() * 40 - 20,
			targetRX: Math.random() * 360,
			targetRY: Math.random() * 360,
			targetRZ: Math.random() * 360,
			targetTZ: Math.random() * 40 - 20,
			speed: 0.004 + Math.random() * 0.006,
		})),
	);
	const frameRef = useRef<number>(0);

	useEffect(() => {
		const els = containerRef.current?.querySelectorAll<HTMLDivElement>(".shape");
		if (!els) return;

		const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

		const tick = () => {
			animRef.current.forEach((s, i) => {
				s.rotateX = lerp(s.rotateX, s.targetRX, s.speed);
				s.rotateY = lerp(s.rotateY, s.targetRY, s.speed);
				s.rotateZ = lerp(s.rotateZ, s.targetRZ, s.speed);
				s.translateZ = lerp(s.translateZ, s.targetTZ, s.speed);

				if (Math.abs(s.rotateX - s.targetRX) < 1) s.targetRX = Math.random() * 360;
				if (Math.abs(s.rotateY - s.targetRY) < 1) s.targetRY = Math.random() * 360;
				if (Math.abs(s.rotateZ - s.targetRZ) < 1) s.targetRZ = Math.random() * 360;
				if (Math.abs(s.translateZ - s.targetTZ) < 0.5) s.targetTZ = Math.random() * 80 - 40;

				const el = els[i];
				if (el) {
					el.style.transform = `rotateX(${s.rotateX}deg) rotateY(${s.rotateY}deg) rotateZ(${s.rotateZ}deg) translateZ(${s.translateZ}px)`;
				}
			});

			frameRef.current = requestAnimationFrame(tick);
		};

		frameRef.current = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frameRef.current);
	}, []);

	return (
		<div
			ref={containerRef}
			style={{
				width: 320,
				height: 320,
				perspective: "600px",
				position: "relative",
			}}
		>
			{shapes.map((s, i) => (
				<div
					key={i}
					className="shape"
					style={{
						position: "absolute",
						left: s.x,
						top: s.y,
						width: s.w,
						height: s.h,
						borderRadius: s.r,
						border: "2px solid rgba(255,255,255,0.35)",
						background: "rgba(255,255,255,0.08)",
						backdropFilter: "blur(2px)",
						transformStyle: "preserve-3d",
						willChange: "transform",
					}}
				/>
			))}
		</div>
	);
}

export default function MorphingCubeProxy() {
	return <MorphingCube />;
}
