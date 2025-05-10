import { useEffect, useState } from 'react';

import BootSplash from 'react-native-bootsplash';

export const useInitProfile = () => {
  const [userAuthenticated, setUserAuthenticated] = useState(false);

  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init()
      .then(() => {
        // do something after all tasks finished
        console.log('All tasks finished');
        setUserAuthenticated(true);
      })
      .catch((e) => {
        console.error('Error during initialization:', e);
        setUserAuthenticated(false);
      })
      .finally(async () => {
        await BootSplash.hide({ fade: true });
        console.log('BootSplash has been hidden successfully');
      });
  }, []);

  return { userAuthenticated };
};
