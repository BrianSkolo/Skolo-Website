import styles from './BackgroundLayoutImg.module.css';
   

const BackgroundLayoutImg = (props) => {
    const { children } = props;
    return (
        <div className={styles.bgOverlay}>
            <div 
                className={styles.bgImage} >
                    {children}
            </div>
        </div>
    )
};

export default BackgroundLayoutImg;