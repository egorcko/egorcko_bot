import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Crossword from "../components/Crossword/Crossword";
import InputBlock from "../components/InputBlock/InputBlock";
import Success from "../components/Success/Success";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [success, setSuccess] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Алинка Super Star</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {success && <Success />}
        {!success && (
          <>
            <Crossword />
            <InputBlock onSuccess={() => setSuccess(true)} />
          </>
        )}
      </main>
    </div>
  );
};

export default Home;
