import BlackLayout from "./layouts/BlackLayout";
import MainLayout from "./layouts/MainLayout";
import MuiTheme from "./MuiTheme";

const App = () => {
	return (
		<MuiTheme>
			<BlackLayout />
			<MainLayout />
			<BlackLayout />
		</MuiTheme>
	);
};

export default App;
