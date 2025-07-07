import { Camera, Phone } from "lucide-react";
import styles from "./Contact.module.css";

const Contact = () => (
  <>
    <div className={styles.card}>
      <div className={styles.userInfoCard}>
        <div className={styles.userLeft}>
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Yolanda"
            className={styles.avatar}
          />
          <div>
            <strong>Yolanda</strong>
            <div className={styles.subtext}>Web Development</div>
          </div>
        </div>
        <Camera size={18} />
      </div>
    </div>

    <div className={styles.card}>
  <div className={styles.userInfoCard}>
    <div className={styles.userLeft}>
      <img
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
        alt="María"
        className={styles.avatar}
      />
      <div>
        <strong>María</strong>
      </div>
    </div>
    <Phone size={18} />
  </div>
</div>

  </>
);

export default Contact;