import mixpanel from 'mixpanel-browser';
import { v4 as uuidv4 } from 'uuid';

export const useMixpanel = () => {
  
  mixpanel.init('b5224da04446c5e2daeb53b7cd513461', {
    debug: process.env.NODE_ENV === 'development',
  });

  const visit = () => {
    let uuid = localStorage.getItem('uuid');
    if (!uuid) {
      uuid = uuidv4();
      localStorage.setItem('uuid', uuid);
    }
    mixpanel.track('visit', { uuid });
  };

  const read = (pageId: string, pageTitle: string) => {
    let uuid = localStorage.getItem('uuid');
    mixpanel.track('read', { uuid, pageId, pageTitle });
  };

  return {
    visit,
    read,
  };
};
