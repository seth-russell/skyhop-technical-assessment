"use client";

import Dropdown from "./Components/Dropdown";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [ tolerance, setTolerance ] = useState(false);
  const [ split, setSplit ] = useState(false);
  const [ client, setClients ] = useState([ 'Client 1', 'Client 2' ])

  return (
    <main className={styles.main}>
      <h1>Document Upload</h1>
      <hr className={styles.headerhr} />
      <div className={styles.formcontainer}>
        <div className={styles.formcontent1}>
          <Dropdown
            label="Select Import Name:"
            style="titled"
            toleranceToggled={false}
            options={[ "Name 1", "Name 2" ]}
            />
          <hr className={styles.hr} />
          <h4>Select a manifest that you'd like to import</h4>
          <p>INSERT FILE UPLOAD HERE</p>
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
          <p>INSERT RADIO BUTTONS HERE</p>
          <hr className={styles.hr} />
          <h4>Location Checking:</h4>
          <p className={styles.confirmed}>All Available!</p>
          <hr className={styles.hr} />
          <h4>Client:</h4>
          <p>INSERT RADIO BUTTONS HERE</p>
        </div>
      </div>
    </main>
  );
}
