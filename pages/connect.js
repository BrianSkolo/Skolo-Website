export default function Form() {
    return (
      <div className="search bar ui segment">
        <form action="/api/form" method="post">
          <label htmlFor="first">First Name</label>
          <input type="text" id="first" name="first" required />
  
          <label htmlFor="second">Last Name</label>
          <input type="text" id="last" name="last" required />

          <label htmlFor="third">Email</label>
          <input type="text" id="email" required />

          <label htmlFor="last">Email</label>
          <input type="text" id="email" required />
  
          <button style={{ backgroundColor: 'blue', color: 'white' }} type="submit">Submit</button>
        </form>
      </div>
    )
  }