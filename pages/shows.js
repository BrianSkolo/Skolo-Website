import styles from'../styles/Home.module.css';
import Unicorns from '../public/Unicorns.jpg'


function Shows() {
    return (
        <div className={styles.shows}>
            <h1 id="show_page">
                <h2>Upcoming Shows:</h2>
                <p>The Unicorns and The Cruz Coalition Presents: In Unicorns We Trust</p>
                <p>6250 Hollywood Blvd, Los Angeles CA</p>
                <p>July 3, 2022</p>
            </h1>
            <img 
                src="Unicorns.jpg"
                width="1000 px"
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