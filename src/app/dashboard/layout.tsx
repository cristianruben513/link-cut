import type { ReactNode } from "react";
import Footer from "@/components/layout/footer";
import { cn } from "@/utils";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <>
      <main className={cn("container mt-5 mb-[68px] flex w-full items-center")}>
        {props.children}
      </main>
      <Footer className="fixed bottom-0 py-4" />
    </>
  );
};

export default DashboardLayout;
