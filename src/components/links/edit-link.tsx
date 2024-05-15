"use client";

import { updateLink } from "@/server/actions/links";
import { EditLinkSchema } from "@/server/schemas";
import Alert from "@/ui/alert";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Input, Textarea } from "@/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Links } from "@prisma/client";
import { LoaderIcon, SaveIcon } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { z } from "zod";

interface EditLinkProps {
  trigger: ReactNode;
  link: Links;
}

const EditLink = (props: EditLinkProps) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setError] = useState(false);

  // Main form:
  const form = useForm<z.infer<typeof EditLinkSchema>>({
    resolver: zodResolver(EditLinkSchema),
    defaultValues: {
      id: props.link.id,
      url: props.link.url,
      slug: props.link.slug,
      description: props.link.description ?? "",
    },
  });

  // Form Submit method:
  const onSubmit = async (values: z.infer<typeof EditLinkSchema>) => {
    // Check if slug & url are equals to prevent infinite redirect =>
    if (values.slug === values.url) {
      setLoading(false);
      setError(true);
      setMessage("The URL and the slug cannot be the same");
      return;
    }

    try {
      setLoading(true);
      await updateLink(values);

      // If not any changes in the tags, return:
      toast.success("Link edited successfully.", {
        description: `Url: https://lcut.vercel.app/${values.slug}`,
        duration: 10000,
        closeButton: true,
      });
      form.reset();
      setOpen(false);
    } catch (error) {
      toast.error("An unexpected error has occurred. Please try again later.");
    } finally {
      setError(false);
      setMessage("");
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{props.trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader className="overflow-hidden">
          <DialogTitle>Edit link</DialogTitle>
          <DialogDescription className="block truncate">
            /{props.link.slug}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-5">
              <FormField
                control={form.control}
                name="url"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Destination URL:</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={props.link.url}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short link:</FormLabel>
                    <FormControl>
                      <div className="relative flex items-center">
                        <Input
                          {...field}
                          placeholder={props.link.slug}
                          disabled={true}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description (optional):</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        defaultValue={props.link.description ?? "Description"}
                        disabled={loading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {isError && <Alert variant="error">{message}</Alert>}
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="ghost" disabled={loading}>
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <LoaderIcon size={16} className="animate-spin" />
                ) : (
                  <SaveIcon size={16} />
                )}
                <span>{loading ? "Saving..." : "Save"}</span>
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditLink;
