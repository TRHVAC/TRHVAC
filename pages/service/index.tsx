import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import { useEffect } from 'react';

const Service: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /service/cooling page when the user visits /service
    router.replace('/service/cooling');
  }, [router]);

  return null;
};

export default Service;
