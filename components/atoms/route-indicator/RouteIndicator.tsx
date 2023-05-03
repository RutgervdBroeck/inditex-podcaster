import { useRouter } from "next/router";
import styles from "./RouteIndicator.module.css";
import { useCallback, useEffect, useState } from "react";

const RouteIndicator = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onRouteChangeStart = useCallback(() => {
    setLoading(true);
  }, []);

  const onRouteChangeDone = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", onRouteChangeStart);
    router.events.on("routeChangeComplete", onRouteChangeDone);
    router.events.on("routeChangeError", onRouteChangeDone);

    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart);
      router.events.off("routeChangeComplete", onRouteChangeDone);
      router.events.off("routeChangeError", onRouteChangeDone);
    };
  }, [onRouteChangeDone, onRouteChangeStart, router.events]);

  return (
    <div className={`${styles.indicator} ${loading ? styles.loading : ""}`} />
  );
};

export default RouteIndicator;
