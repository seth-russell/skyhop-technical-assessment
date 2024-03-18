import styles from '@/app/ui/Dropdown.module.css';
import ToleranceIcon from './ToleranceIcon';

export default function Dropdown(props) {
	function options() {
		let opts = [];
		if (props.title) {
			opts.push(<option value="" key="title" className={styles.option}>{props.title}</option>);
		}
		for (const option of props.options) {
			opts.push(<option value={option} key={option} className={styles.option}>{option}</option>);
		}
		return opts;
	}

	const selectClassNames = `${styles.select} ${props.label ? styles.labeled : styles.titled}`;

	return (
		<div className={styles.main}>
			{props.label && (<label className={styles.label} for={props.id}>{props.label}</label>)}
			<select name={props.name} id={props.id} className={selectClassNames}>
				{options()}
			</select>
			{props.toleranceToggled && (<ToleranceIcon />)}
		</div>
	);
}
