import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import bambooFrame from "../../assets/bamboo-frame.png";
import "@fontsource/nerko-one";
import "@fontsource/inter/500.css";

const PhaseCard = ({ card }) => {
	return (
		<Box>
			<Box
				backgroundColor="#FFF1BB"
				height="330px"
				width="555px"
				position="relative"
				zIndex={-1}>
				<Box
					height="370px"
					width="605px"
					position="absolute"
					zIndex={0}
					sx={{
						backgroundImage: `url(${bambooFrame})`,
						backgroundRepeat: "no-repeat",
						transform: "scale(1.1)",
						top: -20,
						left: -25,
					}}>
					<Box
						height="240px"
						width="455px"
						position="absolute"
						p={3}
						sx={{
							transform: "translate(-50%, -50%)",
							top: "50%",
							left: "50%",
						}}>
						<Typography
							variant="h4"
							textAlign="center"
							color="#53865D"
							fontFamily="Nerko One">
							{card.title}
						</Typography>
						<List>
							{card.list.map((listItem) => (
								<ListItem key={listItem} sx={{ py: 0.5 }}>
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
											variant="body1"
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
