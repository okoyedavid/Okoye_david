export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact me</h2>

      <div className="contact-container max-w-6xl mx-auto grid">
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <i className="uil uil-envelope-edit contact-card-icon"></i>
              <h3 className="contact-card-title">Email</h3>
              <span className="contact-card-data">user@gmail.com</span>
              <span className="contact-button">
                Write me
                <i className="uil uil-arrow-right contact-button-icon"></i>
              </span>
            </div>

            <div className="contact-card">
              <i className="uil uil-whatsapp contact-card-icon"></i>
              <h3 className="contact-card-title">Whatsapp</h3>
              <span className="contact-card-data">999-888-777</span>
              <span className="contact-button">
                Write me
                <i className="uil uil-arrow-right contact-button-icon"></i>
              </span>
            </div>

            <div className="contact-card">
              <i className="uil uil-facebook-messenger contact-card-icon"></i>
              <h3 className="contact-card-title">Messenger</h3>
              <span className="contact-card-data">user.fb123</span>
              <span className="contact-button">
                Write me
                <i className="uil uil-arrow-right contact-button-icon"></i>
              </span>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <form action="" className="contact-form">
            <div className="input-container">
              <input type="text" className="input" />
              <label htmlFor="">Username</label>
              <span>Username</span>
            </div>

            <div className="input-container">
              <input type="email" className="input" />
              <label htmlFor="">Email</label>
              <span>Email</span>
            </div>

            <div className="input-container">
              <input type="tel" className="input" />
              <label htmlFor="">Phone</label>
              <span>Phone</span>
            </div>

            <div className="input-container textarea">
              <textarea name="" id="" className="input"></textarea>
              <label htmlFor="">Message</label>
              <span>Message</span>
            </div>

            <button type="submit" className="button">
              <i className="uil uil-navigator button-icon"></i>Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
