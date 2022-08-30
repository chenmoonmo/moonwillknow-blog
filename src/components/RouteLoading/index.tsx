import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from './index.module.scss';

const RouteLoading = () => {
  const router = useRouter();
  const [isRouteChanging, setIsRouteChanging] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = (path: string) => {
      if (path === router.asPath) {
        return;
      }
      setIsRouteChanging(true);
    };

    const handleRouteChangeEnd = () => {
      setIsRouteChanging(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeEnd);
    router.events.on('routeChangeError', handleRouteChangeEnd);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeEnd);
      router.events.off('routeChangeError', handleRouteChangeEnd);
    };
  }, [router.events]);

  return isRouteChanging ? <div className={styles.container}>Loading...</div> : null;
};

export default RouteLoading;
function ture(ture: any) {
  throw new Error('Function not implemented.');
}
