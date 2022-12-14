import styles from "./styles.module.css";

const Pulse = ({ pulse, filterPulse, setFilterPulse }) => {
	const onChange = ({ currentTarget: input }) => {
		if (input.checked) {
			const state = [...filterPulse, input.value];
			setFilterPulse(state);
		} else {
			const state = filterPulse.filter((val) => val !== input.value);
			setFilterPulse(state);
		}
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>Pulse-Laser</h1>
			<div className={styles.pulse_container}>
				{pulse.map((pulse) => (
					<div className={styles.pulse} key={pulse}>
						<input
							className={styles.pulse_input}
							type="radio"
							value={pulse}
							onChange={onChange}
						/>
						<p className={styles.pulse_label}>{pulse}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Pulse;
