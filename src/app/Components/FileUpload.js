import styles from '@/app/ui/FileUpload.module.css';
import { RiFileReduceFill } from "react-icons/ri";

export default function FileUpload(props) {
	return (
		<div className={styles.main}>
			<div className={styles.inner}>
				<RiFileReduceFill className={styles.icon} />
				<p>Drag & Drop Here Or <a>Browse</a></p>
			</div>
			<button className={styles.button}>Upload Manifest</button>
		</div>
	)
}
