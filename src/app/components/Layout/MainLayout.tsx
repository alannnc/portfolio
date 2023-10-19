interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <main className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 h-[100vh] flex flex-row m-auto items-center justify-center">
      {children}
    </main>
  );
};

export { MainLayout };
