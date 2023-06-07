import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import bambooFrame from "../../assets/bamboo-frame.png";
import bambooFrameSm from "../../assets/bamboo-frame-sm.png";
import bambooFrameMd from "../../assets/bamboo-frame-md.png";
import "@fontsource/nerko-one";
import "@fontsource/inter/500.css";

const PhaseCard = ({ card, isSm, isLg }) => {
	return (
		<Box>
			<Box
				backgroundColor="#FFF1BB"
				height={isSm ? "226px" : isLg ? "260px" : "330px"}
				width={isSm ? "374px" : isLg ? "424px" : "555px"}
				position="relative"
				zIndex={-1}>
				<Box
					height={isSm ? "256px" : isLg ? "295px" : "370px"}
					width={isSm ? "424px" : isLg ? "490px" : "605px"}
					position="absolute"
					zIndex={0}
					sx={{
						backgroundImage: `url(${
							isSm
								? bambooFrameSm
								: isLg
								? bambooFrameMd
								: bambooFrame
						})`,
						backgroundRepeat: "no-repeat",
						transform: "scale(1.1)",
						top: isSm ? -10 : -20,
						left: isSm ? -25 : -25,
					}}>
					<Box
						height={isSm ? "210px" : isLg ? "225px" : "280px"}
						width={isSm ? "324px" : isLg ? "380px" : "455px"}
						position="absolute"
						p={3}
						sx={{
							transform: "translate(-50%, -50%)",
							top: "50%",
							left: "50%",
						}}>
						<Typography
							variant={isSm ? "h5" : isLg ? "h4" : "h3"}
							textAlign="center"
							color="#53865D"
							fontFamily="Nerko One">
							{card.title}
						</Typography>
						<List>
							{card.list.map((listItem) => (
								<ListItem
									key={listItem}
									sx={{ py: isSm ? 0 : 0.5 }}>
									<ListItemText
										disableTypography
										sx={{
											listStyleType: "disc",
											display: "list-item",
											p: 0,
											my: 0,
											mx: 2,
										}}>
										<Typography
											variant={
												isSm
													? "body2"
													: isLg
													? "body1"
													: "p"
											}
											fontFamily="Inter">
											{listItem}
										</Typography>
									</ListItemText>
								</ListItem>
							))}
						</List>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default PhaseCard;
