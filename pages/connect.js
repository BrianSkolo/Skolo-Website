import styles from'../styles/Home.module.css';

export default function Form() {
    return (
      <div className="container">
        <h1 className={styles.music}>Connect:</h1>
        <form className={styles.connect} action="/api/form" method="post">
          <label htmlFor="first">First Name</label>
          <input className="input" type="text" id="first" name="first" required />
  
          <label htmlFor="second">Last Name</label>
          <input className="input" type="text" id="last" name="last" required />

          <label htmlFor="third">Email</label>
          <input className="input" type="text" id="email" required />

          <label htmlFor="last">Message</label>
          <input className="input" type="text" id="email" required />

          {/* <br /> */}
  
          <button className="input" style={{ backgroundColor: 'blue', color: 'white' }} type="submit">Submit</button>
        </form>
        {/* <style jsx> {`       
          .form {
             display: flex;
             flex-direction: column;
            
          }             
        `}
        </style> */}
      </div>
    )
  }