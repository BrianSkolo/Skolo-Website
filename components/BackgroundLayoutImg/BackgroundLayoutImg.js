import styles from './BackgroundLayoutImg.module.css';

const BackgroundLayoutImg = (props) => {
    const { children } = props;
    return (
        <div>
            <div className={styles.bgImage}>
                {children}
            </div>
        </div>
    )
};

export default BackgroundLayoutImg;