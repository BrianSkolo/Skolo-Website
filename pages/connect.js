import styles from '../styles/Home.module.css';
import Link from "next/link";

// 

export default function Form() {
  return (
    <div className={styles.connect}>

      {/* tour dates */}
      <div style={{ marginBottom: '200px', transform: 'scale(2)' }}>
        <div>
          <h1 className={styles.tourDates} style={{ margin: 0, marginTop: '0px', marginBottom: '0px' }}>
            Tour
          </h1>
        </div>
        <div>
          <h1 className={styles.tourDates} style={{ margin: 0, marginBottom: '5px', marginTop: '0', padding: '0' }}>
            Dates
          </h1>
        </div>
        {/* purchase tickets */}
        <Link class="shows" href="/shows">
          <button
            className={styles.buttonbg} style={{ borderWidth: '1px', borderStyle: 'solid', padding: '5px', borderRadius: '4px' }}>Purchase Tickets
          </button>
        </Link>
      </div>

      {/* email header */}
      <div className={styles.connectContactUs}>
        <div>

          <h1
            style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', fontFamily: 'BebasNeue', margin: '0', marginBottom: '15px', transform: 'scale(2)', paddingBottom: '5px' }}>Community News
          </h1>

          <h2
            style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', fontSize: '20px', margin: '0', marginTop: '5px', marginBottom: '10px', paddingBottom: '10px' }}>Subscribe with your email address to keep up with the latest Skolo news, events, and exclusives via email.
          </h2>

        </div>


        {/* contact form */}
        <div className={styles.form} style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>

          <form className={styles.form} action="/api/form" method="post">
            {/* <label htmlFor="first">First Name</label>
          <input className="input" type="text" id="first" name="first" required />

          <label htmlFor="second">Last Name</label>
          <input className="input" type="text" id="last" name="last" required /> */}

            <label htmlFor="third">
              <input
                className="input" type="text" id="email" style={{ borderRadius: '4px', fontFamily: 'Roboto', borderColor: 'white' }} placeholder='Enter your email' />
            </label>

            {/* <label htmlFor="last">Message</label>
          <input className="input" type="text" id="email" required /> */}

            <br />

            <button
              className={styles.form} style={{ width: '4%', borderRadius: '4px', backgroundColor: 'red', fontFamily: 'Roboto', color: 'white', borderColor: 'transparent' }} type="submit">Sign Up</button>
          </form>
        </div>

        <div>
          
        </div>

      </div>
    </div>
  )
}