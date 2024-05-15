import { auth } from "@/auth";
import { buttonVariants } from "@/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import Avatar from "boring-avatars";
import { SignOut } from "./sign-out";

export default async function UserButton() {
  const session = await auth();

  if (!session?.user) return null

  if (session?.user)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger
          name={session.user.name ?? "User Menu"}
          className={buttonVariants({
            variant: "ghost",
            size: "icon",
          })}
        >
          {session.user.name && (
            <Avatar size={22} name={session.user.name} variant="beam" />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">
                {session.user.name}
              </p>
              <p className="text-xs leading-none text-neutral-400">
                {session.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <SignOut />
        </DropdownMenuContent>
      </DropdownMenu>
    );
}
