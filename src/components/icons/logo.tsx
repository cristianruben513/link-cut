import type { ComponentProps } from "react";
import Image from "next/image";
import logo from "./logo.png";

const Logo: React.FC<ComponentProps<"svg">> = () => {
  return (
    <div className="flex items-center justify-center p-1 bg-white rounded-lg">
      <Image
        src={logo}
        alt="Logo"
        width={24}
        height={24}
      />
    </div>
  );
};

export default Logo;
