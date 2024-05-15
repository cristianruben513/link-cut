"use client";

import { deleteLink } from "@/server/actions/links";
import { Button } from "@/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/dialog";
import type { Links } from "@prisma/client";
import { LoaderIcon, TrashIcon } from "lucide-react";
import { useState, type ReactNode } from "react";
import { toast } from "sonner";

interface DeleteLinkProps {
  link: Links;
  trigger: ReactNode;
}

const DeleteLink = ({ link, trigger }: DeleteLinkProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteLink(link.id);
      setOpen(false);
      toast.success("Link deleted successfully.", {
        description: `The link /${link.slug} has been deleted.`,
      });
    } catch (error) {
      toast.error(
        "An error occurred while deleting the link. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete /{link.slug}</DialogTitle>
          <DialogDescription className="text-red-500 dark:text-red-400">
            Access to the link will be permanently removed. This action cannot
            be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-3">
          <DialogClose asChild>
            <Button variant="ghost" disabled={loading}>
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={handleDelete} disabled={loading} variant="destructive">
            {loading ? (
              <LoaderIcon size={16} className="animate-spin" />
            ) : (
              <TrashIcon size={16} />
            )}
            <span>{loading ? "Deleting..." : "Delete"}</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteLink;
