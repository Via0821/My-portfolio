"use client";

import dynamic from "next/dynamic";

const EarthCanvas = dynamic(() => import("./Earth"), { ssr: false });
const BallCanvas = dynamic(() => import("./Ball"), { ssr: false });
const ComputersCanvas = dynamic(() => import("./Computers"), { ssr: false });
const StarsCanvas = dynamic(() => import("./Stars"), { ssr: false });

export { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas };
