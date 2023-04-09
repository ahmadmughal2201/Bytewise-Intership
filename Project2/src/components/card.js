import styles from "./styles.module.css"

const DesktopPage = () => {
  return (
    <div className={styles.desktop}>
      <div className={styles.desktopChild} />
      <div className={styles.navbar}>
        <div className={styles.logo}>FR</div>
        <div className={styles.menuItems}>
          <div className={styles.about}>About</div>
          <div className={styles.services}>Services</div>
          <div className={styles.contact}>Contact</div>
          <div className={styles.button}>
            <b className={styles.buttonText}>SignUp</b>
          </div>
        </div>
      </div>
      <div className={styles.revolutionizingTheWay}>
        Revolutionizing the Way Farmers Sell Their Crops
      </div>
      <div className={styles.joinTheAgricultural}>
        Join the Agricultural Revolution: Access Fresh, Local Produce and
        Support Farmers Directly. With our platform, you can support local
        farmers while enjoying access to fresh, quality produce.
      </div>
      <div className={styles.button1}>
        <img className={styles.pencilaltIcon} alt="" src="/pencilalt.svg" />
        <b className={styles.buttonText}>Join Now</b>
      </div>
      <img className={styles.farmerIcon} alt="farmer" src='./assets/farmer.png' />
      <img className={styles.farmerLight3pai610lTransfoIcon} alt="hanging light" src="./assets/light.png" />

      <img className={styles.desktopItem} alt="glow bulb" src="/ellipse-2.svg" />
    </div>
  );
};

export default DesktopPage;


