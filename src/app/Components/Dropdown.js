import styles from '@/app/ui/Dropdown.module.css';
import ToleranceIcon from './ToleranceIcon';

export default function Dropdown(props) {

	return (
		<div className={styles.main}>
			{props.label && (<label className={styles.label} for={props.id}>{props.label}</label>)}
			<div className={props.label ? styles.partialwidth : styles.fullwidth}>
				<select name={props.name} id={props.id} className={styles.select}>
					{props.title && <option value="" key="title">{props.title}</option>}
					{props.options.map((opt) => <option value={opt} key={opt}>{opt}</option>)}
				</select>
				{props.toleranceToggled && (<ToleranceIcon />)}
			</div>
		</div>
	);
}
