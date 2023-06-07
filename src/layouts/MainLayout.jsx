import React from "react";
import PhaseCardList from "../components/phaseCard/PhaseCardList";
import { Box, Typography } from "@mui/material";
import "@fontsource/black-han-sans";
import "@fontsource/yellowtail";
import backgroundIllustration from "../assets/background-illustration.png";

const MainLayout = () => {
	return (
		<Box
			height="200vw"
			minHeight="200vh"
			sx={{
				backgroundImage: `url(${backgroundIllustration})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}>
			<Box
				sx={{
					position: "sticky",
					top: "100px",
					overflow: "hidden",
				}}>
				<Box mt={10}>
					<Typography
						variant="h1"
						textAlign="center"
						color="#859A50"
						fontFamily="Yellowtail"
						fontSize="140px"
						position="relative"
						zIndex={-1}
						sx={{
							opacity: 0.2,
							transform: "translateY(70px)",
						}}>
						Roadmap
					</Typography>
					<Typography
						variant="h1"
						textAlign="center"
						color="#1C303A"
						fontFamily="Black Han Sans"
						fontSize="64px"
						position="relative"
						zIndex={1}>
						Roadmap
					</Typography>
				</Box>
				<PhaseCardList />
			</Box>
		</Box>
	);
};

export default MainLayout;
