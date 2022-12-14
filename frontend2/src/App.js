import { useEffect, useState } from "react";
import axios from "axios";
import Table from "./components/Table";
import Sort from "./components/Sort";
import Color from "./components/Color";
// import Pulse from "./components/Pulse";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import "./App.css";

const base_url = process.env.REACT_APP_API_URL;

function App() {
	const [obj, setObj] = useState({});
	const [sort, setSort] = useState({ sort: "Max_speed", order: "desc" });
	const [filterColor, setFilterColor] = useState([]);
	const [filterPulse, setFilterPulse] = useState([]);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const getAllMovies = async () => {
			try {
				const url = `${base_url}?page=${page}&sort=${sort.sort},${
					sort.order
				}&color=${filterColor.toString()}&search=${search}`;
				const { data } = await axios.get(url);
				// console.log(data);
				// console.log(filterColor);
				// console.log(page);
				setObj(data);
			} catch (err) {
				console.log(err);
			}
		};

		getAllMovies();
	}, [sort, filterColor,filterPulse, page, search]);

	return (
		<div>
		<div className="wrapper">
			<div className="container">
				<div className="head">
					<img src="./images/logo.png" alt="logo" className="logo" />
					<Search setSearch={(search) => setSearch(search)} />
				</div>
				<div className="body">
					<div className="table_container">
						<Table movies={obj.movies ? obj.movies : []} />
						<Pagination
							page={page}
							limit={obj.limit ? obj.limit : 0}
							total={obj.total ? obj.total : 0}
							setPage={(page) => setPage(page)}
						/>
					</div>
					<div className="filter_container">
						<Sort sort={sort} setSort={(sort) => setSort(sort)} />
						<Color
							filterColor={filterColor}
							colors={obj.colors ? obj.colors : []}
							setFilterColor={(color) => setFilterColor(color)}
						/>
						{/* <Pulse
							filterPulse={filterPulse}
							colors={obj.pulse ? obj.pulse : []}
							setFilterPulse={(pulse) => setFilterPulse(pulse)}
						/> */}
					</div>
				</div>
			</div>
		</div>
		
		</div>
	);
}

export default App;
