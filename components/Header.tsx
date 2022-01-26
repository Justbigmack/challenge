import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-green-200 p-5">
      <Link href="/" passHref>
        <a className="mr-10">Calendar</a>
      </Link>
      <Link href="/attendees" passHref>
        <a className="mr-10">Attendees</a>
      </Link>
      <Link href="/events" passHref>
        My events
      </Link>
    </header>
  );
};

export default Header;
