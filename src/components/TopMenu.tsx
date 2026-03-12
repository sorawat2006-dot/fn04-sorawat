import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div className="flex h-16 items-center justify-end gap-4 bg-white px-6 shadow">
      <TopMenuItem title="Booking" pageRef="/booking" />
      <Image
        src="/img/logo.png"
        alt="logo"
        width={50}
        height={50}
        className="object-contain"
      />
    </div>
  );
}