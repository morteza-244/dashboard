import { ReactNode } from "react";

interface StatProps {
  icon: ReactNode;
  title: string;
  color: string;
  value: string | number;
}

const Stat = ({ color, icon, title, value }: StatProps) => {
  return (
    <>
      <div className="bg-slate-100 dark:bg-gray-900 shadow-lg rounded-lg p-2 w-52 h-20 hover:scale-110 transition-transform flex items-center">
        <div className="flex items-center gap-2">
          <div
            className={`w-9 sm:w-12 h-9 sm:h-12 rounded-full ${color} flex flex-col items-center justify-center`}
          >
            {icon}
          </div>
          <div className="space-y-2">
            <h4 className="text-[14px] sm:text-[17px]">{title}</h4>
            <p className="text-[14px]">{value}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stat;
