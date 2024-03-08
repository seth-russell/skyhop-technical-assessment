import styles from '@/app/ui/UploadBar.module.css';
import { BsFileEarmarkImage } from "react-icons/bs";

export default function UploadBar(props) {
	return (
		<div className={styles.main}>
			<BsFileEarmarkImage className={styles.icon} />
			<div className={styles.inner}>
				<div className={styles.fileInfo}>
					<span>{props.fileName}</span>
					<span>{props.fileSize}</span>
				</div>
				<div className={styles.progressbarbg}>
					<div className={styles.progressbar}></div>
				</div>
			</div>
		</div>
	)
}
