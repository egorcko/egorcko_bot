import { ChangeEventHandler, useState, FC } from "react";
import styles from "./InputBlock.module.scss";

interface InputBlockProps {
  onSuccess: () => void;
}

const InputBlock: FC<InputBlockProps> = ({ onSuccess }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value.toUpperCase());
    setError(false);
  };

  const handleSubmit = () => {
    if (value.trim().toLowerCase() === "алина") onSuccess();
    else setError(true);
  };

  return (
    <div className={styles.root}>
      <p className={styles.title}>Введи полученный ответ в поле</p>
      <div className={styles.inputBlock}>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={handleChange}
        />
        <button className={styles.button} onClick={handleSubmit}>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="okIconTitle"
            stroke="#393e46"
            strokeWidth="1"
            strokeLinecap="square"
            strokeLinejoin="miter"
            fill="none"
            color="#393e46"
          >
            <polyline points="4 13 9 18 20 7" />{" "}
          </svg>
        </button>
      </div>
      {error && <p className={styles.error}>Попробуй другое слово</p>}
    </div>
  );
};

export default InputBlock;
