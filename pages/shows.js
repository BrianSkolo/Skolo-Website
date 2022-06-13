import styles from '../styles/Home.module.css';
import Link from 'next/link';



function Shows() {
    return (
        <div className={styles.shows}>

            <div style={{ transform: 'scale(1.5)', padding: '65px', }}>
                <h1
                    className={styles.showElements} style={{ fontFamily: 'BebasNeue', }}>Upcoming Shows:</h1>
                <p
                    className={styles.showElements}>The Unicorns and The Cruz Coalition Presents: In Unicorns We Trust
                </p>

                <p
                    className={styles.showElements}>6250 Hollywood Blvd, Los Angeles CA
                </p>
                <p
                    className={styles.showElements}>July 3, 2022
                </p>
            </div>
            <div style={{ maxWidth: '35%', marginLeft: 'auto', marginRight: '30px' }}>

                <Link
                    style={{ backgroundColor: "transparent", border: "none", cursor: 'pointer'}}
                    href="https://www.facebook.com/events/705625483884426">
                    <img
                        src="Unicorns.jpg"
                        width="100%"
                        height="100%"
                        object-fit="contain"
                        

                    />
                </Link>
            </div>
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