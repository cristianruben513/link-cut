"use client";

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { DropdownMenuItem } from "@/ui/dropdown-menu";
import { ClipboardIcon } from "lucide-react";
import { toast } from "sonner";

interface CopyLinkProps {
  slug: string;
  className?: string;
}

const CopyLinkDropdown = (props: CopyLinkProps) => {
  const [, copy] = useCopyToClipboard();
  const url = "https://lcut.vercel.app";

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        toast.success("Link copied to clipboard", {
          description: `${text}`,
        });
      })
      .catch((error) => {
        toast.error(
          "An unexpected error has occurred. Please try again later.",
          {
            description: error,
          },
        );
      });
  };

  return (
    <DropdownMenuItem onClick={handleCopy(`${url}/${props.slug}`)}>
      <ClipboardIcon size={15} />
      <span>Copy to clipboard</span>
    </DropdownMenuItem>
  );
};

export default CopyLinkDropdown;
