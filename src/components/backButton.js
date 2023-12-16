import Link from 'next/link';
import React from 'react';

const BackButton = () => {
  return (
    <Link href={'/'} className="fixed right-3 bottom-3">
      Wróć
    </Link>
  );
};

export default BackButton;
