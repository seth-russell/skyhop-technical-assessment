"use client";

import Dropdown from "./Components/Dropdown";
import FileUpload from "./Components/FileUpload";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import RadioButtons from "./Components/RadioButtons";
import styles from "./page.module.css";
import Switch from "react-switch";
import ToleranceIcon from './Components/ToleranceIcon';
import UploadBar from "./Components/UploadBar";
import UploadConfirmation from "./Components/UploadConfirmation";
import { useState } from "react";

// Color sampling
// Main Text: #0A2D4D
// Confirmation text: #2DA96D
// Borders: #BDBDBD
// Upload: #FA9D26

const CLIENTS = ["Client 1", "Client 2", "Client 3", "Client 4"];
const TESTING_CENTERS = ["Testing Center 1", "Testing Center 2", "Testing Center 3", "Testing Center 4"];

export default function Home() {
  const [ showUpload, setShowUpload ] = useState(false);
  const [ tolerance, setTolerance ] = useState(true);
  const [ splitSchedule, setSplitSchedule ] = useState("Yes");
  const [ numberClients, setNumberClients ] = useState("Multiple");
  const [ file, setFile ] = useState(null);

  return (
    <main className={styles.main}>
      {
        !showUpload && (
          <div>
            <button
              className={styles.continuebutton}
              onClick={() => setShowUpload(true)}
            >
              Upload Document
            </button>
          </div>
        )
      }
      {
        showUpload && (
          <div className={styles.popup}>
          <button
            className={styles.closepopup}
            onClick={() => setShowUpload(false)}
          >
            <MdClose className={styles.closeicon} />
          </button>
          <div className={styles.formheader}>
            <h1>Document Upload</h1>
            <hr className={styles.headerhr} />
          </div>
          <div className={styles.formcontainer}>
            <div className={styles.formcontent1}>
              <Dropdown
                title="Select Import Name:"
                toleranceToggled={false}
                options={[ "Name 1", "Name 2" ]}
                />
              <hr className={styles.hr} />
              <h4>Select a manifest that you'd like to import</h4>
              <FileUpload handleFileChange={setFile} />
              <UploadBar
                file={file}
              />
              <hr className={styles.hr} />
              <h4>Elapse Data Checking:</h4>
              <p className={styles.confirmed}>No Elapsed Dates!</p>
              <hr className={styles.hr} />
              <h4>Tolerance Window:</h4>
              <div className={styles.tolerancetoggle}>
                <Switch
                  onChange={(checked) => setTolerance(checked)}
                  checked={tolerance}
                  offColor="#BDBDBD"
                  onColor="#0A2D4D"
                  uncheckedIcon={false}
                  checkedIcon={false}
                />
                <span>{tolerance ? "Toggle ON" : "Toggle OFF"}</span>
                <span className={styles.divider}>|</span>
                <ToleranceIcon />
                <span>Select Tolerance Level</span>
              </div>
            </div>
            <div className={styles.formcontent2}>
              <h4>Split schedule using social distancing?</h4>
              <RadioButtons
                name="social_distancing"
                options={['Yes', 'No']}
                selected={splitSchedule}
                handleChange={setSplitSchedule}
              />
              <hr className={styles.hr} />
              <h4>Location Checking:</h4>
              <p className={styles.confirmed}>All Available!</p>
              <hr className={styles.hr} />
              <h4>Client:</h4>
              {splitSchedule === "Yes" && (
                <>
                  <RadioButtons
                    name="number_clients"
                    options={['Single', 'Multiple']}
                    selected={numberClients}
                    handleChange={setNumberClients}
                  />
                  {numberClients === "Multiple" && TESTING_CENTERS.map((center, index) => (
                      <Dropdown
                        title={"Select Client"}
                        options={CLIENTS}
                        toleranceToggled={tolerance}
                        label={center}
                        id={`center${index}`}
                      />
                    ))
                  }
                  {numberClients === "Single" && (
                      <Dropdown
                        title="Select Testing Center for Client"
                        toleranceToggled={false}
                        options={TESTING_CENTERS}
                        toleranceToggled={tolerance}
                        id={"center"}
                      />
                    )
                  }
                </>
                )
              }
              {splitSchedule === "No" && (
                  <Dropdown
                    title="Select Testing Center:"
                    toleranceToggled={false}
                    options={TESTING_CENTERS}
                    toleranceToggled={tolerance}
                    id={"center"}
                  />
                )
              }
            </div>
          </div>
          <UploadConfirmation filePresent={file !== null} handleFileChange={setFile} />
        </div>
        )
      }

    </main>
  );
}
