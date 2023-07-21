"use client";
import { useCallback, useState } from "react";
import stylesMilk from "./LanguageChooseMilk.module.scss";
import stylesBlue from "./LanguageChoose.module.scss";
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

const idHover = {
  3:{opacity:"0",  left: `calc(150% - 58px)`,top: "10px"},
  2: { left: `calc(100% - 58px)` },
  1: { left: `calc(64% - 58px)` },
  0: { left: `calc(32% - 58px)` },
  
}

const LanguageChoose = ({modelStyle=false}) => {
  const styles = modelStyle ? stylesMilk : stylesBlue
  const colorStyle = modelStyle
    ? { color: "var(--color-milk)" }
    : { color: "var(--color-blue)" };

  const [langChoose, setLangChoose] = useState(langData);
  const [isHovered, handleMouseEnter, handleMouseLeave] = useHover();
  const [tabHover,setTabHover] = useState(3)
  const handleClick = useCallback((id) => {
    const newLang = langChoose.map((item) => {
      if (item.id === id) {
        return { ...item, isActive: true };
      } else {
        return { ...item, isActive: false };
      }
    });
    setLangChoose(newLang);
    handleMouseLeave();
  }, []);

  return (
    <div className={styles.langBlock}>
      <div
        className={isHovered ? styles.langWrap : styles.langWrapNoActive}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={isHovered ? styles.langOther : styles.langOtherNoActive}
        >
          {langChoose.map((lang, idx) => {
            if (!lang.isActive) {
              return (
                <p
                  className={styles.langItemOther}
                  onClick={() => handleClick(lang.id)}
                  key={lang.id}
                  onMouseEnter={() => setTabHover(idx)}
                  style={idx === tabHover ? colorStyle : null}
                  onMouseLeave={() => setTabHover(3)}
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
                className={`${styles.langItem} `}
                onMouseEnter={() => {
                  handleMouseEnter();
                  setTabHover(2);
                }}
                onMouseLeave={() => setTabHover(3)}
                style={2 === tabHover ? colorStyle : null}
                onClick={() => handleClick(lang.id)}
                key={lang.id}
              >
                {lang.name}
              </p>
            );
          }
        })}
        <div
          className={styles.tab}
          style={idHover[tabHover]}
        ></div>
      </div>
    </div>
  );
};

export default LanguageChoose;
