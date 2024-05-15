interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <main className="container mt-5 mb-[68px] flex w-full items-center">
      {props.children}
    </main>
  );
};

export default DashboardLayout;
