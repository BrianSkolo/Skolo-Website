import styles from './BackgroundLayoutImg.module.css';
   

const BackgroundLayoutImg = (props) => {
    const { children } = props;
    return (
            <div className={styles.bgImage} >
                {children}
           </div>
    // do i need to pass children properties into this div?  I don't see what properties children is refereeing to here.
    )
};

export default BackgroundLayoutImg;