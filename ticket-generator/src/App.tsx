import heroImg from './assets/pattern-squiggly-line-bottom-desktop.svg'
import './App.css'

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>Your Journey to Coding Conf 2025 Start Here!</h1>
          <p>
            Secure your spot at next year's biggest coding conference.
          </p>
        </div>
      </section>

      <div className="ticks">
        <div>
          <p>Upload Avatar</p>
        </div>
        <div>
          <p>Drag and drop or click to Upload</p>
        </div>
        <div>
          <p>Upload your photo (JPG or PNG, max size: 500KB).</p>
        </div>
      </div>

      <section id='input-section'>
        <div>
          <p>Full Name</p>
          <input type="text" placeholder='' />
        </div>
        <div>
          <p>Email Address</p>
          <input type="text" placeholder='example@email.com' />
        </div>
        <div>
          <p>Github Username</p>
          <input type="text" placeholder='@username' />
        </div>
        <button type='submit'>Generate My Ticket</button>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
