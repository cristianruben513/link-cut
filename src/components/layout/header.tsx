import UserButton from "@/components/auth/user-btn";
import { ModeToggle } from "@/components/change-theme";
import Logo from "@/components/icons/logo";
import { cn } from "@/utils";
import Link from "next/link";

const Header = () => {
  return (
    <nav
      className={cn(
        "flex w-full",
        "pb-3 pt-4 lg:px-4",
        "sticky top-0 z-50",
      )}
    >
      <div
        className={cn("flex w-full items-center justify-between", "container")}
      >
        <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-1 pr-1 md:pr-4">
            <Link
              href="/"
              className="flex items-center space-x-3 transition-opacity hover:opacity-80 rtl:space-x-reverse"
            >
              <Logo />
              <span className="self-center whitespace-nowrap text-lg font-medium tracking-tight dark:text-white">
                Link Cut
              </span>
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

export default Header;
