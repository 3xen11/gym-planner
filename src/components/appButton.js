import Link from 'next/link';
import React from 'react';

const AppButton = ({ title, icon, link }) => {
  return (
    <div>
      <Link
        href={link}
        className="border-2 h-32 w-32 border-gray-400 rounded-lg border-solid flex justify-center items-center"
      >
        {title}
      </Link>
    </div>
  );
};

export default AppButton;
