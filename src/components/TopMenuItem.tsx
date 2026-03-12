"use client";

import Link from "next/link";

type TopMenuItemProps = {
  title: string;
  pageRef: string;
};

export default function TopMenuItem({ title, pageRef }: TopMenuItemProps) {
  return (
    <Link
      href={pageRef}
      className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-black"
    >
      {title}
    </Link>
  );
}