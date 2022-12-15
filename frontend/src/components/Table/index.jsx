import styles from "./styles.module.css";

const Table = ({ movies }) => {
	
	return (
		
		<div className={styles.container}>
			<div className={styles.heading}>
				<p className={styles.title_tab}>Title</p>
				<p className={styles.color_tab}>Color</p>
				<p className={styles.maxspeed_tab}>Max_speed</p>
				<p className={styles.pulse_tab}>Pulse</p>
			</div>
			{movies.map((movie) => (
				<div className={styles.movie} key={movie._id}>
					<div className={styles.title_container}>
						<img src={movie.img} alt="movie" className={styles.movie_img} />
						<p className={styles.movie_title}>
							{movie.name} ({movie.year})
						</p>
					</div>
					<div className={styles.color_container}>
						{movie.color.map((color, index) => (
							<p key={color} className={styles.movie_color}>
								{color}
								{index !== movie.color.length - 1 && "/"}
							</p>
						))}
					</div>
					<div className={styles.rating_container}>
						<p className={styles.movie_rating}>{movie.maxspeed }</p>
					</div>
					<div className={styles.rating_container}>
						<p className={styles.movie_rating}> {movie.pulse }</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Table;
