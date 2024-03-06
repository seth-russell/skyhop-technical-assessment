import styles from '@/app/ui/Dropdown.module.css';
import { LuClock5 } from 'react-icons/lu';

export default function Dropdown(props) {
	const labeled = props.style === "labeled";
	const dropdownId = props.label.replace(/\s+/g, "");

	function options() {
		let opts = [];
		if (!labeled) {
			opts.push(<option value="">{props.label}</option>);
		}
		for (const option of props.options) {
			opts.push(<option value={option}>{option}</option>)
		}
		return opts;
	}

	return (
		<div className={styles.main}>
			{labeled && (<label class={styles.label} for={dropdownId}>{props.label}</label>)}
			<select name={props.name} id={dropdownId} className={labeled ? styles.labeled : styles.titled}>
				{options()}
			</select>
			{props.toleranceToggled && (<LuClock5 className={styles.icon} />)}
		</div>
	);
}
