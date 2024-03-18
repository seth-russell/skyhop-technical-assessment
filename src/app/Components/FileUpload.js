import styles from '@/app/ui/FileUpload.module.css';
import { RiFileReduceFill } from "react-icons/ri";

export default function FileUpload(props) {
	const onChange = (event) => {
		props.handleFileChange(event.target.files[0]);
	}

	return (
		<div className={styles.main}>
			<div className={styles.inner}>
				<RiFileReduceFill className={styles.icon} />
				<p className={styles.browse}>Drag & Drop Here Or <input type="file" accept=".csv" onChange={onChange} /></p>
			</div>
			<button className={styles.button}>Upload Manifest</button>
		</div>
	)
}
