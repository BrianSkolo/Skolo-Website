import styles from '../styles/Home.module.css';

// 

export default function Form() {
  return (
    <div className={styles.connect}>
      <div className={styles.connectContactUs}>
        <h1>Contact Us:</h1>
      </div>

      <div className={styles.connectContactForm} style={{ display: 'flex', justifyContent: 'center' }}>
        <form className={styles.form} action="/api/form" method="post">
          <label htmlFor="first">First Name</label>
          <input className="input" type="text" id="first" name="first" required />

          <label htmlFor="second">Last Name</label>
          <input className="input" type="text" id="last" name="last" required />

          <label htmlFor="third">Email</label>
          <input className="input" type="text" id="email" required />

          <label htmlFor="last">Message</label>
          <input className="input" type="text" id="email" required />

          <br />

          <button className="input" style={{width: '25%'}} type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}