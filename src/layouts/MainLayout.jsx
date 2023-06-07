import React from "react";
import { useTheme, useMediaQuery, Box, Typography } from "@mui/material";
import PhaseCardList from "../components/phaseCard/PhaseCardList";
import backgroundIllustration from "../assets/background-illustration.png";
import "@fontsource/black-han-sans";
import "@fontsource/yellowtail";

const MainLayout = () => {
	const theme = useTheme();
	const isSm = useMediaQuery(theme.breakpoints.down("sm"));
	const isLg = useMediaQuery(theme.breakpoints.down("lg"));

	return (
		<Box
			height={"200vw"}
			minHeight={isSm ? "300vh" : "200vh"}
			sx={{
				backgroundImage: `url(${backgroundIllustration})`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}>
			<Box
				sx={{
					position: "sticky",
					top: isSm ? "10px" : "20px",
					overflow: "hidden",
				}}>
				<Box>
					<Typography
						variant="h1"
						textAlign="center"
						color="#859A50"
						fontFamily="Yellowtail"
						fontSize={isSm ? "80px" : isLg ? "100px" : "140px"}
						position="relative"
						zIndex={-1}
						sx={{
							opacity: 0.2,
							transform: isSm
								? "translateY(50px)"
								: isLg
								? "translateY(60px)"
								: "translateY(70px)",
						}}>
						Roadmap
					</Typography>
					<Typography
						variant="h1"
						textAlign="center"
						color="#1C303A"
						fontFamily="Black Han Sans"
						fontSize={isSm ? "40px" : isLg ? "48px" : "64px"}
						position="relative"
						zIndex={1}>
						Roadmap
					</Typography>
				</Box>
				<PhaseCardList isSm={isSm} isLg={isLg} />
			</Box>
		</Box>
	);
};

export default MainLayout;
