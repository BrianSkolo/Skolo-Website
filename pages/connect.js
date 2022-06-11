import styles from '../styles/Home.module.css';
import Link from "next/link";

// 

export default function Form() {
  return (
    <div className={styles.connect}>

      {/* tour dates */}
      <div style={{ marginBottom: '100px' }}>
          <h1 className={styles.tourDates}>
            Tour Dates
          </h1>
          {/* purchase tickets */}
          <Link class="shows" href="/shows">
                <button className={styles.buttonbg} style={{ borderWidth: '1px', borderStyle: 'solid', padding: '5px', borderRadius: '4px'}}>Purchase Tickets</button>
          </Link>
      </div>

      {/* email header */}
      <div className={styles.connectContactUs} >
        <h1 style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>Community News:</h1>
        <h2 style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>Subscribe with your email address to keep up with the latest Skolo news, events, and exclusives via email.</h2>
      </div>


      {/* contact form */}
      <div className={styles.connectContactForm} style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>

        <form className={styles.form} action="/api/form" method="post">
          {/* <label htmlFor="first">First Name</label>
          <input className="input" type="text" id="first" name="first" required />

          <label htmlFor="second">Last Name</label>
          <input className="input" type="text" id="last" name="last" required /> */}

          <label htmlFor="third">
            <input className="input" type="text" id="email"  style={{  borderRadius: '4px' }} placeholder='Enter your email'/>
          </label>

          {/* <label htmlFor="last">Message</label>
          <input className="input" type="text" id="email" required /> */}

          <br />

          <button className={styles.form} style={{width: '4%', borderRadius: '4px'}} type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  )
}