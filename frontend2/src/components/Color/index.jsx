import styles from "./styles.module.css";

const Color = ({ colors, filterColor, setFilterColor }) => {
	const onChange = ({ currentTarget: input }) => {
		if (input.checked) {
			const state = [...filterColor, input.value];
			setFilterColor(state);
		} else {
			const state = filterColor.filter((val) => val !== input.value);
			setFilterColor(state);
		}
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Filter By Color</h1>
			<div className={styles.color_container}>
				{colors.map((color) => (
					<div className={styles.color} key={color}>
						<input
							className={styles.color_input}
							type="checkbox"
							value={color}
							onChange={onChange}
						/>
						<p className={styles.color_label}>{color}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Color;
