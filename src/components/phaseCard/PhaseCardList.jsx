import React, { useEffect, useState } from "react";
import PhaseCard from "./PhaseCard";
import { Box } from "@mui/material";
import { PhaseCards } from "./PhaseCards";

const PhaseCardList = () => {
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
		<Box height="calc(100vh - 50px)" mt="200px" pl="25%">
			<Box
				width="100vh"
				display="flex"
				gap={20}
				sx={{
					willChange: "transform",
					transform: `translate3d(-${scrollY}px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
					transformStyle: "preserve-3d",
				}}>
				{PhaseCards.map((card) => (
					<PhaseCard card={card} key={card.id} />
				))}
			</Box>
		</Box>
	);
};

export default PhaseCardList;
