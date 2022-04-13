import CrosswordComponent from "@jaredreisinger/react-crossword";
import { useEffect, useState } from "react";
import styles from "./Crossword.module.scss";

const data = {
  across: {
    1: {
      clue: "",
      answer: "ЗАБЫЛ",
      row: 0,
      col: 2,
    },
    2: {
      clue: "",
      answer: "ПОШЛА",
      row: 1,
      col: 0,
    },
    3: {
      clue: "",
      answer: "ИДЕАЛ",
      row: 2,
      col: 3,
    },
    4: {
      clue: "",
      answer: "ЗНОБИТ",
      row: 3,
      col: 2,
    },
    5: {
      clue: "",
      answer: "СКАЗКА",
      row: 4,
      col: 1,
    },
  },
  down: {},
};

const Crossword = () => {
  const [correct, setCorrect] = useState(false);
  const [complete, setComplete] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleComplete = (isCorrect: boolean) => {
    setComplete(true);
    setCorrect(isCorrect);
  };

  useEffect(() => {
    if (complete && !correct) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    }
  }, [complete]);

  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <h1 className={styles.title}>
          Обрати внимание на свои карточки с&nbsp;подсказками
        </h1>
        <p className={`${styles.error} ${showError && styles.show}`}>
          Ответ неверный. Попробуй еще раз
        </p>
      </div>
      {complete && correct && (
        <div className={styles.shadow}>
          <div className={styles.shadowInner}>
            <div className={styles.border} />
          </div>
        </div>
      )}
      <CrosswordComponent
        data={data}
        acrossLabel=" "
        downLabel=" "
        onCrosswordComplete={handleComplete}
      />
    </div>
  );
};

export default Crossword;
