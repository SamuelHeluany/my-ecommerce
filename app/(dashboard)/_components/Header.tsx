export const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full items-center justify-between px-10">
      {children}
    </div>
  );
};

export const HeaderLeft = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-xs  text-slate-600">{children}</div>;
};

export const HeaderRight = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center">{children}</div>;
};

export const HeaderTitle = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-xl font-semibold ">{children}</div>;
};

export const HeaderSubtitle = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex text-sm items-center gap-2">{children}</div>;
};
