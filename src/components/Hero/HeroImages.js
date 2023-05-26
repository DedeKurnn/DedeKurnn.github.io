import profilePhoto from "../../assets/OC.png";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";

const HeroImages = (props) => {

  const iconChat = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "#F3E24900",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "#F3E249FF",
    },
  };

  const iconRect = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
    },
  };

  return (
    <div className={props.className}>
      <div>
        <div className={styles.heroContainer}>
          <div className={styles.imageContainer}>
            <img
              src={profilePhoto}
              alt="Dede"
              className={styles.profilePicture}
            />
          </div>
          <svg
            width="78"
            height="78"
            viewBox="0 0 78 78"
            fill="none"
            className={styles.rect1}
          >
            <motion.rect
              width="78"
              height="78"
              rx="16"
              fill="#F3E249"
              variants={iconRect}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </svg>
          <motion.svg
            width="298"
            height="120"
            viewBox="0 0 298 120"
            fill="none"
            className={styles.chat}
          >
            <g>
              <motion.path
                d="M0 44C0 30.7452 10.7452 20 24 20H278.5C289.27 20 298 11.2696 298 0.5V0.5V31.5V96C298 109.255 287.255 120 274 120H24C10.7452 120 0 109.255 0 96V44Z"
                variants={iconChat}
                initial="hidden"
                animate="visible"
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
              />
              <text
                x="10%"
                y="55%"
                fontFamily="Plus Jakarta Sans"
                fontSize="20"
                fontWeight="600"
                fill="black"
              >
                Hi. I’m Dede Kurniawan
              </text>
              <text
                x="10%"
                y="75%"
                fontFamily="Plus Jakarta Sans"
                fontSize="20"
                fontWeight="600"
                fill="black"
              >
                Welcome to my portfolio
              </text>
            </g>
          </motion.svg>
          <svg
            width="266"
            height="147"
            viewBox="0 0 266 147"
            fill="none"
            className={styles.rect2}
          >
            <motion.rect
              x="1.5"
              y="1.5"
              width="263"
              height="144"
              rx="22.5"
              stroke="#5039BC"
              strokeOpacity="0.7"
              strokeWidth="3"
              variants={iconRect}
              initial="hidden"
              animate="visible"
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                fill: { duration: 2, ease: [1, 0, 0.8, 1] },
              }}
            />
          </svg>
          <svg
            width="266"
            height="147"
            viewBox="0 0 266 147"
            fill="none"
            className={styles.rect3}
          >
            <motion.rect
              x="1.5"
              y="1.5"
              width="263"
              height="144"
              rx="22.5"
              stroke="#5039BC"
              strokeOpacity="0.7"
              strokeWidth="3"
              variants={iconRect}
              initial="hidden"
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{
                default: { duration: 2, ease: "easeInOut" },
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </svg>
        </div>
      </div>
      <svg
        viewBox="0 0 1 1"
        width="1"
        height="1"
        fill="none"
        className="absolute top-0 right-0"
      >
        <defs>
          <clipPath clipPathUnits="objectBoundingBox" id="clip">
            <path
              d="M0 0.0457143C0 0.020467 0.0254625 0 0.056872 0H0.943128C0.974538 0 1 0.020467 1 0.0457143V0.790476C1 0.815723 0.974538 0.83619 0.943128 0.83619H0.848341C0.816932 0.83619 0.791469 0.856657 0.791469 0.881905V0.954286C0.791469 0.979533 0.766007 1 0.734597 1H0.056872C0.0254625 1 0 0.979533 0 0.954286V0.0457143ZM0.00710901 0.111185C0.0168109 0.0971309 0.0354595 0.087619 0.056872 0.087619H0.232227C0.262328 0.087619 0.28673 0.0680049 0.28673 0.0438095C0.28673 0.0274886 0.297833 0.0132521 0.314299 0.00571429H0.056872C0.0293887 0.00571429 0.00710901 0.0236229 0.00710901 0.0457143V0.111185Z"
              fill="white"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default HeroImages;
