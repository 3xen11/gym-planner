import BackButton from '@/src/components/backButton';
import Link from 'next/link';
import React from 'react';

const Diet = () => {
  return (
    <div className="flex jusify-center items-center">
      <BackButton />
      <div className="flex-col flex gap-8">
        <Link href="/" className="">
          PONIEDZIAŁEK - WTOREK
        </Link>
        <Link href="/" className="">
          ŚRODA - CZWARTEK
        </Link>
        <Link href="/" className="">
          PIĄTEK - SOBOTA
        </Link>
        <Link href="/" className="">
          NIEDZIELA
        </Link>
      </div>
    </div>
  );
};

export default Diet;
