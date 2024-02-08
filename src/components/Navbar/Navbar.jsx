import { LogoIconDark } from "@/ui/icons";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-8 text-text_secondary">
      <div className="flex flex-row justify-center items-center gap-3 text-black text-2xl">
        <Link href="/">{LogoIconDark}</Link>
        Base
      </div>
      <div className="flex flex-col h-full gap-4 mt-8">
        <Link
          href="#"
          className="py-4 ps-8 hover:text-backgroud_purple hover:bg-gradient-to-r from-[#deddff] to-white"
        >
          Dashboard
        </Link>

        <Link
          href="#"
          className="py-4 ps-8 hover:text-backgroud_purple hover:bg-gradient-to-r from-[#deddff] to-white"
        >
          Upload
        </Link>

        <Link
          href="#"
          className="py-4 ps-8 hover:text-backgroud_purple hover:bg-gradient-to-r from-[#deddff] to-white"
        >
          Invoice
        </Link>

        <Link
          href="#"
          className="py-4 ps-8 hover:text-backgroud_purple hover:bg-gradient-to-r from-[#deddff] to-white"
        >
          Schedule
        </Link>

        <Link
          href="#"
          className="py-4 ps-8 hover:text-backgroud_purple hover:bg-gradient-to-r from-[#deddff] to-white"
        >
          Calender
        </Link>

        <Link
          href="#"
          className="py-4 ps-8 hover:text-backgroud_purple hover:bg-gradient-to-r from-[#deddff] to-white"
        >
          Notification
        </Link>

        <Link
          href="#"
          className="py-4 ps-8 hover:text-backgroud_purple hover:bg-gradient-to-r from-[#deddff] to-white"
        >
          Settings
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
