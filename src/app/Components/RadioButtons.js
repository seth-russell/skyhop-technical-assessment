import styles from '@/app/ui/RadioButtons.module.css';

export default function RadioButtons(props) {

	function buttons() {
		const buttons = [];

		for (const option of props.options) {
			buttons.push(
				<>
					<input
					  type="radio"
					  name={props.name}
					  value={option}
					  id={option}
					  className={styles.radio}
					  checked={props.selected === option}
					  onChange={(e) => props.handleChange(e.target.value)}
					/>
					<label className={styles.label} for={option}>{option}</label>
				</>);
		}
		return buttons;
	}

	return (
		<div className={styles.main}>
			{buttons()}
		</div>
	)
}
