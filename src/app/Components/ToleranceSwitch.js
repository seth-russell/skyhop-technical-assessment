import styles from '@/app/ui/ToleranceSwitch.module.css';
import Switch from "react-switch";
import ToleranceIcon from './ToleranceIcon';

export default function ToleranceSwitch(props) {
	return (
		<div className={styles.main}>
			<div className={styles.switchcontainer}>
				<Switch
					onChange={(checked) => props.handleToleranceChange(checked)}
					checked={props.tolerance}
					offColor="#BDBDBD"
					onColor="#0A2D4D"
					uncheckedIcon={false}
					checkedIcon={false}
		        />
		        <span className={styles.toggleindicator}>{props.tolerance ? "Toggle ON" : "Toggle OFF"}</span>
	        </div>
	        <span className={styles.divider}>|</span>
            <div className={styles.switchLabel}>
            	<ToleranceIcon />
            	<span>Select Tolerance Level</span>
            </div>
		</div>
	);
}
