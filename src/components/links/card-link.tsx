import type { Links } from "@prisma/client";

import {
  CopyIcon,
  QrCodeIcon,
  SettingsIcon,
  TrashIcon
} from "lucide-react";

import { Dialog, DialogTrigger } from "@/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import ExternalLink from "@/ui/external-link";

import CopyLinkDropdown from "./copy-link";
import CopyQR from "./copy-qr";
import DeleteLink from "./delete-link";
import EditLink from "./edit-link";
import ShowClicks from "./show-clicks-link";

interface CardLinkProps {
  linkInfo: Links;
}

const CardLink = ({ linkInfo }: CardLinkProps) => {
  return (
    <div className="flex w-full flex-col border border-neutral-300 p-3 rounded-md dark:border-neutral-700 bg-white dark:bg-black transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] translate-x-[3px] translate-y-[3px]">

      <div className="mb-1 flex w-full items-center justify-between space-x-2">
        <ExternalLink
          href={`/${linkInfo.slug}`}
          className="block  space-x-[1px] overflow-hidden truncate font-medium transition-opacity duration-75 hover:opacity-80"
        >
          <span className="text-sm opacity-40">/</span>
          <span>{linkInfo.slug}</span>
        </ExternalLink>
        <div className="flex items-center space-x-3">
          <ShowClicks
            numberOfClicks={linkInfo.clicks}
            className="hidden border-r border-neutral-200 pr-2 dark:border-neutral-800 md:flex"
          />
          <Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger className="transition-opacity hover:opacity-75">
                <CopyIcon size={15} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <CopyLinkDropdown slug={linkInfo.slug} />
                <DialogTrigger asChild>
                  <DropdownMenuItem>
                    <QrCodeIcon size={15} />
                    <span>Copy QR Code</span>
                  </DropdownMenuItem>
                </DialogTrigger>
              </DropdownMenuContent>
            </DropdownMenu>
            <CopyQR linkInfo={linkInfo} />
          </Dialog>
          <EditLink
            trigger={
              <button className="transition-opacity hover:opacity-75">
                <SettingsIcon size={16} />
              </button>
            }
            link={linkInfo}
          />
          <DeleteLink
            link={linkInfo}
            trigger={
              <button className="transition-opacity hover:opacity-75">
                <TrashIcon size={16} />
              </button>
            }
          />
        </div>
      </div>
      <p
        className="mb-2 truncate font-mono text-sm text-neutral-500 dark:text-neutral-400"
        title={linkInfo.url}
      >
        {linkInfo.url}
      </p>
    </div>
  );
};

export default CardLink;
