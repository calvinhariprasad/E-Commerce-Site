import React from "react";

import * as styles from "../../styles/Layout/Footer.module.scss";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <div className={styles.content}>
        <div className={styles.about}>
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend
            suscipit mauris ac molestie. Fusce nec sollicitudin libero. Nullam
            nisl sapien, blandit id tortor vitae, tempus facilisis nisi.
          </p>
          <br />
          <p>
            Fusce nec sollicitudin libero. Nullam nisl sapien, blandit id tortor
            vitae, tempus facilisis nisi. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. In eleifend suscipit mauris ac
            molestie.
          </p>
        </div>
        <div className={styles.contact}>
          <h1>Contact</h1>
          <form name="contact" action="/success" method="POST">
            <div>
              <label>
                <span>Name</span>
                <input type="text" name="name" required minLength="2" />
              </label>
            </div>
            <div>
              <label>
                <span>Email</span>
                <input type="email" name="email" required />
              </label>
            </div>
            <div>
              <label>
                <span>Message</span>
                <textarea name="message" cols="30" rows="8" required></textarea>
              </label>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; Phoenix Tech 2021. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
