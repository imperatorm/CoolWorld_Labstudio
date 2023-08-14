"use client";
import { useCallback, useState } from "react";
import stylesMilk from "./LanguageChooseMilk.module.scss";
import stylesBlue from "./LanguageChoose.module.scss";
import useHover from "@/hooks/useHover";
import useWindowSize from "@/hooks/useViewport";

const langData = [
  {
    id: 0,
    name: "EN",
    isActive: false,
  },
  {
    id: 1,
    name: "IT",
    isActive: false,
  },
  {
    id: 2,
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
  const {isHovered, handleMouseEnter, handleMouseLeave} = useHover();
  const [inActive,setInActive] = useState(false)
  const [tabHover,setTabHover] = useState(3);
  
  const handleClick = useCallback((id) => {
    
    const newLang = langChoose.map((item) => {
      if (item.id === id) {
        return { ...item, isActive: true };
      } else {
        return { ...item, isActive: false };
      }
    });
    setLangChoose(newLang);
    // handleMouseLeave();
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
          {langChoose
            .filter((item) => !item.isActive)
            .map((lang, idx) => {
              if (!lang.isActive) {
                return (
                  <p
                    className={styles.langItemOther}
                    onClick={() => {
                      handleClick(lang.id);
                      setTabHover(3);
                      handleMouseLeave();
                      setInActive(!inActive);
                    }}
                    key={lang.id}
                    onMouseEnter={() => {
                      setTabHover(idx);
                    }}
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
                className={`${inActive ? styles.inActive : null} ${
                  styles.langItem
                } `}
                onMouseEnter={() => {
                  handleMouseEnter();
                  setTabHover(2);
                  setInActive(!inActive);
                }}
                onMouseLeave={() => setTabHover(3)}
                style={2 === tabHover ? colorStyle : null}
                onClick={() => {
                  handleClick(lang.id);
                  handleMouseEnter();
                }}
                key={lang.id}
              >
                {lang.name}
              </p>
            );
          }
        })}
        <div
          className={styles.tab}
          style={isHovered ? idHover[tabHover] : idHover[3]}
        ></div>
      </div>
    </div>
  );
};

export default LanguageChoose;
