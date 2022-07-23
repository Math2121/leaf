import Link from 'next/link';
import { ReactNode } from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface IntroProps {
  title: string;
}

export function Intro({ title}:IntroProps) {
  return (
    <>
       <section className="w-full bg-gray-200 h-44">
        <div className="container  m-auto p-2 flex items-center justify-between h-full">
          <h2 className="text-4xl font-bahnschrift">{title}</h2>

          <div className="flex items-center gap-4">
            <Link href="/" className="font-bahnschrift">
              Home
            </Link>
            <FaArrowRight size={12} />
            <span className="font-bahnschrift text-green-400">{title}</span>
          </div>
        </div>
      </section>
    </>
  );
}
