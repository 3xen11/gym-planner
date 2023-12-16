import Link from 'next/link';
import React from 'react';

const BackButton = () => {
  return (
    <Link href={'/'} className="fixed top-3 right-3">
      Wróć
    </Link>
  );
};

export default BackButton;
