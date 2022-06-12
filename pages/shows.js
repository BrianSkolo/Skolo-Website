import styles from'../styles/Home.module.css';



function Shows() {
    return (
        <div className={styles.shows}>
            <h1 className="showPage">
                <h2 className={styles.showElements} style={{ fontFamily: 'BebasNeue' }}>Upcoming Shows:</h2>
                <p className={styles.showElements}>The Unicorns and The Cruz Coalition Presents: In Unicorns We Trust</p>
                <p className={styles.showElements}>6250 Hollywood Blvd, Los Angeles CA</p>
                <p className={styles.showElements}>July 3, 2022</p>
            </h1>
            <img 
                src="Unicorns.jpg"
                width="100%"
                height="100%"
                object-fit="contain"
            />
        </div>
    )
   
}

// const myLoader = ({ src, width, quality }) => {
//     return `${src}?w=${width}&q=${quality || 75}`
// } 

// const UnicornFlyer = (props) => {
//     return (
//         <Image 
//         loader={myLoader}
//         scr={Unicorns}
//         alt="In Unicorns We Trust"
//         width={500}
//         height={500}
//         />
//     )
// }



export default Shows