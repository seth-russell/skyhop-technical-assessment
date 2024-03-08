import styles from '@/app/ui/UploadBar.module.css';
import { BsFileEarmarkImage } from "react-icons/bs";

export default function UploadBar(props) {
	const name = props.file ? props.file.name : "No file selected";
	const fileSizeMB = props.file ? props.file.size / 1000000 : 0;

	return (
		<div className={styles.main}>
			<BsFileEarmarkImage className={styles.icon} />
			<div className={styles.inner}>
				<div className={styles.fileinfo}>
					<span className={styles.name}>{name}</span>
					<span className={styles.size}>{`${fileSizeMB} MB`}</span>
				</div>
				<div className={styles.progressbarbg}>
					<div className={styles.progressbar}></div>
				</div>
			</div>
		</div>
	)
}
