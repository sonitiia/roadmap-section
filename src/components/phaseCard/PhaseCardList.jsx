import React, { useEffect, useState } from "react";
import PhaseCard from "./PhaseCard";
import { Box } from "@mui/material";
import { PhaseCards } from "./PhaseCards";

const PhaseCardList = ({ isSm, isLg }) => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const pageHeight = window.innerHeight / 2;

			if (scrollPosition > pageHeight) {
				setScrollY(scrollPosition - pageHeight);
			} else {
				setScrollY(0);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<Box
			height={
				isSm
					? "calc(100vh - 50px)"
					: isLg
					? "calc(100vh - 70px)"
					: "calc(100vh - 100px)"
			}
			mt={isSm ? "50%" : "10%"}
			pl={"50%"}>
			<Box
				width={isSm ? "100%" : "100vh"}
				display="flex"
				gap={isSm ? 14 : 20}
				sx={{
					willChange: "transform",
					transform: `translate3d(-${scrollY}px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
					transformStyle: "preserve-3d",
				}}>
				{PhaseCards.map((card) => (
					<PhaseCard
						card={card}
						key={card.id}
						isSm={isSm}
						isLg={isLg}
					/>
				))}
			</Box>
		</Box>
	);
};

export default PhaseCardList;
