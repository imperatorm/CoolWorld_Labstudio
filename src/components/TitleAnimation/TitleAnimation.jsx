"use client"
import React, {useState} from 'react'
import { useTrail, a } from "@react-spring/web";
import styles from "./TitleAnimation.module.scss"
const Trail = ({ trail, items, nameClass, }) => {
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
const TitleAnimation = ({ children, containerName = "container" }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 100, tension: 8000, friction: 600 },
    opacity: 1,
    x: 0,
    height: "auto",
    from: { opacity: 0, x: 80, height: 0 },
  });
  return (
    <>
      <Trail nameClass={"trailsText"} trail={trail} items={items} />
    </>
  );
};

const TitleAnimationItem = ({children}) => {
   const items = React.Children.toArray(children);
   const trail = useTrail(items.length, {
     config: { mass: 10, tension: 9000, friction: 800 },
     opacity: 1,
     x: 0,
     y:0,
     height: "auto",
     from: { opacity: 0, x: 180,y:80, height: 0 },
   });
  return (
    <>
      <Trail open={open} trail={trail} items={items} />
        
    </>
  );
};
export { TitleAnimation, TitleAnimationItem };

