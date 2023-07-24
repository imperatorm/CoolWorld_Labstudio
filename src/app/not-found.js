import Link from "next/link";
import React from "react";
import styles from "./Home.module.scss";
import TheHeader from "@/components/TheHeader/TheHeader";
const NotFound = () => {
  return (
    <>
      <TheHeader />
    <div className={`${styles.notFound} main-container`}>
      <h2>Seite wurde nicht gefunden.</h2>
      <Link href={"/"}>zurück zu Seite</Link>
      <h3>404</h3>
    </div>
    </>
  );
};

export default NotFound;
