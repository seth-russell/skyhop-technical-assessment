import styles from '@/app/ui/UploadConfirmation.module.css';

export default function UploadConfirmation(props) {
	return (
		<>
			{props.filePresent && (
				<div className={styles.main}>
            		<h3 className={styles.header}>Data in the import file is correct. Please press Continue to import.</h3>
            		<div className={styles.buttonscontainer}>
              			<button className={styles.continuebutton}>Continue Import</button>
              			<button className={styles.cancelbutton} onClick={() => props.handleFileChange(null)}>Cancel</button>
            		</div>
          		</div>
			)}
			{!props.filePresent && (
				<div className={styles.main}>
					<h3 className={styles.header}>No import file detected. Please press Import Manifest</h3>
				</div>
			)}
		</>
	)
}
