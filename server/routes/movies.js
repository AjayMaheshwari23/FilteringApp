const router = require("express").Router();
const Movie = require("../models/Movie");
const movies = require("../config/movies.json");
const { query } = require("express");

router.get("/movies", async (req, res) => {
	try {
		const page = parseInt(req.query.page) - 1 || 0;
		const limit = parseInt(req.query.limit) || 5;
		const search = req.query.search || "";
		let sort = req.query.sort || "maxspeed";
		let color = req.query.color || "All";
		let pulse = req.query.pulse || "1";

		const colorOptions = [
			"Red",
			"Black",
			"White",
			"Yellow",
			"Purple",
			"Blue",
			"Pink",
			"Orange"
		];

		// const pulseOptions = [
		//     "Has pulse laser",
		// 	"Does not have pulse laser"	,
		// ];

		color === "All"
			? (color = [...colorOptions])
			: (color = req.query.color.split(","));
		req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

		// pulse === "All"
		// 	? (pulse = [...pulseOptions])
		// 	: (pulse = req.queery.pulse.split(","));


		let sortBy = {};
		if (sort[1]) {
			sortBy[sort[0]] = sort[1];
		} else {
			sortBy[sort[0]] = "asc";
		}

		const movies = await Movie.find({ name: { $regex: search, $options: "i" } })
			.where("color")
			.in([...color])
			// .in([...pulse])
			.sort(sortBy)
			.skip(page * limit)
			.limit(limit);

		// const total = await Movie.countDocuments({
		// 	color: { $in: [...color] },
		// 	name: { $regex: search, $options: "i" },
		// });

	const total = 14;

		console.log("  I am triggered = " +  total);
		console.log("HELLO");

		const response = {
			error: false,
			total,
			page: page + 1,
			limit,
			colors: colorOptions,
			movies,
		};

		// console.log(limit);

		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: "Internal Server Error" });
	}
});

const insertMovies = async () => {
    try {
        const docs = await Movie.insertMany(movies);
        return Promise.resolve(docs);
    } catch (err) {
        return Promise.reject(err)
    }
};

insertMovies()
    .then((docs) => console.log(docs))
    .catch((err) => console.log(err))

module.exports = router;
