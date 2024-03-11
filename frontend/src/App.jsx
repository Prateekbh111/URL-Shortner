import MainContainer from "./components/MainContainer";
import NavBar from "./components/NavBar";

function App() {
	return (
		<>
			<NavBar />
			<main className="mt-20 flex justify-center w-full">
				<MainContainer />
			</main>
		</>
	);
}

export default App;
