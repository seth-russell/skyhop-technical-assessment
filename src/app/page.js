"use client";

import Dropdown from "./Components/Dropdown";
import FileUpload from "./Components/FileUpload";
import Image from "next/image";
import RadioButtons from "./Components/RadioButtons";
import styles from "./page.module.css";
import { useState } from "react";

// Color sampling
// Main Text: #0A2D4D
// Confirmation text: #2DA96D
// Borders: #BDBDBD
// Upload: #FA9D26

export default function Home() {
  const [ tolerance, setTolerance ] = useState(true);
  const [ splitSchedule, setSplitSchedule ] = useState("Yes");
  const [ numberClients, setNumberClients ] = useState("Multiple");
  const clients = [ 'Client 1', 'Client 2' ];
  const testingCenters = ['Testing Center 1', 'Testing Center 2', 'Testing Center 3', 'Testing Center 4'];
  console.log(numberClients);

  const handleSplitScheduleChange = (event) => {
    setSplitSchedule(event.target.value);
  }

  const handleNumberClientsChange = (event) => {
    setNumberClients(event.target.value);
  }

  function displaySocialDistanceOptions() {
    let testingCenterDropdowns = [];
    for (const center of testingCenters) {
      testingCenterDropdowns.push(
        <Dropdown
            label={center}
            title="Select Client"
            style="labeled"
            toleranceToggled={tolerance}
            options={clients}
          />
      );
    }
    return testingCenterDropdowns;
  }

  return (
    <main className={styles.main}>
      <div className={styles.popup}>
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
            <FileUpload />
            <p>INSERT LOADING BAR HERE</p>
            <hr className={styles.hr} />
            <h4>Elapse Data Checking:</h4>
            <p className={styles.confirmed}>No Elapsed Dates!</p>
            <hr className={styles.hr} />
            <h4>Tolerance Window:</h4>
            <p>INSERT TOGGLE SWITCH HERE</p>
          </div>
          <div className={styles.formcontent2}>
            <h4>Split schedule using social distancing?</h4>
            <RadioButtons
              name="social_distancing"
              options={['Yes', 'No']}
              selected={splitSchedule}
              handleChange={handleSplitScheduleChange}
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
                  handleChange={handleNumberClientsChange}
                />
                {numberClients === "Multiple" && (
                    <div>
                     {displaySocialDistanceOptions()}
                    </div>
                  )
                }
                {
                  numberClients === "Single" && (
                    <Dropdown
                      title="Select Testing Center for Client"
                      toleranceToggled={false}
                      options={testingCenters}
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
                  options={testingCenters}
                />
              )
            }
          </div>
        </div>
        <div className={styles.formfooter}>
          <h3>Data in the import file is correct. Please press Continue to import.</h3>
          <div className={styles.formfooterbuttons}>
            <button className={styles.continuebutton}>Continue Import</button>
            <button className={styles.cancelbutton}>Cancel</button>
          </div>
        </div>
      </div>
    </main>
  );
}
