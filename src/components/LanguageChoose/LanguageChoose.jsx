"use client"
import { useCallback, useState } from "react";
import styles from "./LanguageChoose.module.scss";
import useHover from "@/hooks/useHover";

const langData = [
  {
    id: Math.random(),
    name: "EN",
    isActive: false,
  },
  {
    id: Math.random(),
    name: "IT",
    isActive: false,
  },
  {
    id: Math.random(),
    name: "DE",
    isActive: true,
  },
];

const LanguageChoose = () => {
  const [langChoose, setLangChoose] = useState(langData);
  const [isHovered, handleMouseEnter, handleMouseLeave] = useHover();
;
  
  const handleClick = useCallback((id) => {
    const newLang = langChoose.map(item => {
      if(item.id === id) {
        return {...item, isActive:true}
      } else {
        return { ...item, isActive: false };
      }
    })
    setLangChoose(newLang);
    handleMouseLeave()
  }, []);
  return (
    <div
      className={isHovered ? styles.langWrap : styles.langWrapNoActive}
      onMouseLeave={handleMouseLeave}
    >
      <div className={isHovered ? styles.langOther : styles.langOtherNoActive}>
        {langChoose.map((lang) => {
          if (!lang.isActive) {
            return (
              <p
                className={styles.langItem}
                onClick={() => handleClick(lang.id)}
                key={lang.id}
              >
                {lang.name}
              </p>
            );
          }
        })}
      </div>
      {langChoose.map((lang) => {
        if (lang.isActive) {
          return (
            <p
              className={`${styles.langItem} ${styles.langActive}`}
              onMouseEnter={handleMouseEnter}
              onClick={() => handleClick(lang.id)}
              key={lang.id}
            >
              {lang.name}
            </p>
          );
        }
      })}
    </div>
  );
};

export default LanguageChoose;