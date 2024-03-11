import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { themeActions } from "../store/theme.slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function NavBar() {
	const dispatch = useDispatch();
	const themeMode = useSelector((state) => state.theme.themeMode);

	useEffect(() => {
		document.querySelector("html").classList.remove("light", "dark");
		document.querySelector("html").classList.add(themeMode);
	}, [themeMode]);

	function handleThemeChange() {
		if (themeMode == "light") {
			dispatch(themeActions.setDarkMode());
		} else {
			dispatch(themeActions.setLightMode());
		}
	}

	return (
		<div className="flex justify-center items-center relative h-12 pt-8">
			<div className="">
				<h1 className="font-bold text-3xl text-indigo-500 bg">URL Shortner</h1>
			</div>
			<div className="right-6 absolute mr-4 text-indigo-500">
				<button onClick={handleThemeChange}>
					{themeMode == "light" && <MdDarkMode size={25} />}
					{themeMode == "dark" && <MdLightMode size={25} />}
				</button>
			</div>
		</div>
	);
}
