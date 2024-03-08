import styles from '@/app/ui/Dropdown.module.css';
import { LuClock5 } from 'react-icons/lu';

export default function Dropdown(props) {
	const dropdownId =
		props.label
		? props.label.replace(/\s+/g, "")
		: props.title
		? props.title.replace(/\s+/g, "")
		: "genericid";

	function options() {
		let opts = [];
		if (props.title) {
			opts.push(<option value="" key="title" className={styles.titleoption}>{props.title}</option>);
		}
		for (const option of props.options) {
			opts.push(<option value={option} key={option}>{option}</option>);
		}
		return opts;
	}

	const selectClassNames = `${styles.select} ${props.label ? styles.labeled : styles.titled}`;

	return (
		<div className={styles.main}>
			{props.label && (<label className={styles.label} for={dropdownId}>{props.label}</label>)}
			<select name={props.name} id={dropdownId} className={selectClassNames}>
				{options()}
			</select>
			{props.toleranceToggled && (<LuClock5 className={styles.icon} />)}
		</div>
	);
}
