import type { Metadata } from "next";

import { getLinksAndTagsByUser } from "@/server/queries";

import CardLink from "@/components/links/card-link";
import { CreateLink } from "@/components/links/create-link";
import SearchLinks from "@/components/links/search-link";
import { Button } from "@/ui/button";
import { PackageOpenIcon, PlusIcon, SparklesIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard",
};

const DashboardPage = async ({
  searchParams,
}: {
  searchParams?: {
    search?: string;
  };
}) => {
  const data = await getLinksAndTagsByUser();
  const searchLink = searchParams?.search;

  if (!data) {
    return <div>Error</div>;
  }

  if (!data?.links) {
    return <div>Error</div>;
  }

  const filteredLinks = data.links.filter((link) => {
    if (!searchLink) return true;

    // Filter links by search slug
    const matchSlug = !searchLink || link.slug.includes(searchLink);
    return matchSlug;
  });

  return (
    <main className="w-full duration-500 animate-in fade-in-5 slide-in-from-bottom-2">
      <div className="mb-3 flex w-full items-center space-x-2 md:justify-between">
        <SearchLinks className="w-full md:w-72 md:max-w-72" />
        <div className="flex items-center space-x-2">
          <CreateLink>
            <Button>
              <PlusIcon size={16} />
              <span className="hidden md:block">Create Link</span>
            </Button>
          </CreateLink>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-1 lg:grid-cols-2">
        {filteredLinks
          .sort((a, b) => {
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            );
          })
          .map((link) => {
            return (
              <CardLink
                key={link.id}
                linkInfo={link}
              />
            );
          })}
      </div>
      {filteredLinks.length === 0 && (
        <div className="mt-4 flex flex-col items-center justify-center space-y-3 text-center">
          {searchLink ? (
            <PackageOpenIcon size={48} strokeWidth={0.5} />
          ) : (
            <SparklesIcon size={48} strokeWidth={0.5} />
          )}
          {searchLink && (
            <p>
              No links found with{" "}
              <span className="font-mono">{searchLink}</span> slug
            </p>
          )}
          <CreateLink slug={searchLink}>
            <Button variant="outline">
              <PlusIcon size={14} />
              <span>
                {searchLink
                  ? `Create a link with ${searchLink} slug`
                  : "Create a new link"}
              </span>
            </Button>
          </CreateLink>
        </div>
      )}
    </main>
  );
};

export default DashboardPage;
