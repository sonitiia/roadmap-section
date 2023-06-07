import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import * as React from "react";

export const MUI_THEME = createTheme({
	MuiCssBaseline: {
		styleOverrides: {
			body: {
				m: 0,
			},
		},
	},
});

const MuiTheme = ({ children }) => {
	return (
		<ThemeProvider theme={MUI_THEME}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

export default MuiTheme;
