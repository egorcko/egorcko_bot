import styles from "./Success.module.scss";

const Success = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>🎉 УРААА!!! 🎉</h1>
      <h2 className={styles.subtitle}>
        Ты прошла все испытания и теперь можешь забрать свой подарок на заднем
        сидении нашей машины ❤️
      </h2>
      <img className={styles.gif} src="./success.gif" alt="" />
    </div>
  );
};

export default Success;
