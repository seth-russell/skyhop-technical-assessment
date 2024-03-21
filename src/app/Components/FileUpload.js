import styles from '@/app/ui/FileUpload.module.css';
import { RiFileReduceFill } from "react-icons/ri";
import { useRef } from "react";

export default function FileUpload(props) {
	const inputRef = useRef(null);

	const handleClick = () => {
		inputRef.current.click();
	}

	const onChange = (event) => {
		props.handleFileChange(event.target.files[0]);
	}

	return (
		<div className={styles.main}>
			<input type="file" accept=".csv" onChange={onChange} className={styles.hiddeninput} ref={inputRef}  />
			<div className={styles.inner}>
				<RiFileReduceFill className={styles.icon} />
				<span className={styles.browse} onClick={handleClick}>Drag & Drop Here Or <b>Browse</b></span>
			</div>
			<button className={styles.button} onClick={handleClick}>Upload Manifest</button>
		</div>
	)
}
