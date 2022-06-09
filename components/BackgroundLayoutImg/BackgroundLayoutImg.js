import styles from './BackgroundLayoutImg.module.css';

const BackgroundLayoutImg = (props) => {
    const { children } = props;
    return (
        <div className={styles.bgImage}>
            {children}
        </div>
    )
};

export default BackgroundLayoutImg;