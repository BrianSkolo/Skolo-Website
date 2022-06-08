import Image from 'next/image';
import Unicorns from '..public/Unicorns.jpg'

const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
} 

const UnicornFlyer = (props) => {
    return (
        <Image 
        loader={myLoader}
        scr={Unicorns}
        alt="In Unicorns We Trust"
        width={500}
        height={500}
        />
    )
}

