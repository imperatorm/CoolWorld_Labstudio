"use client"
import React, {useState} from 'react'
import { useTrail, a } from "@react-spring/web";
import styles from "./TitleAnimation.module.scss"
const Trail = ({ open,nameClass, children }) => {
  const items = React.Children.toArray(children);

  const trail = useTrail(items.length, {
    config: { mass: 100, tension: 8000, friction: 600 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 80,
    height: open ? 'auto' : 0,
    from: { opacity: 0, x: 80, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles[nameClass]} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};
const TitleAnimation = () => {
  const [open, set] = useState(true);
  return (
    <div className={styles.container}>
      <Trail open={open} nameClass={"trailsText"}>
        <span>Keep</span>
        <span className={styles.secondTitle}>Cool.</span>
        <span className={styles.descTitle}>Enjoy the Summer.</span>
      </Trail>
    </div>
  );
}

const TitleAnimationItem = ({children}) => {
  const [open, set] = useState(true);
  return (
    <div >
      <Trail open={open}>
        {children}
      </Trail>
    </div>
  );
};
export { TitleAnimation, TitleAnimationItem };

