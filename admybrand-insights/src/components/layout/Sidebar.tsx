// src/components/layout/Sidebar.tsx
import { BarChart, LayoutDashboard, LifeBuoy, Package, Receipt, Settings, UserCircle } from 'lucide-react';
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <a href="#" className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base">
          <Package className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">ADmyBRAND Insights</span>
        </a>
        <NavItem icon={<LayoutDashboard className="h-5 w-5" />} text="Dashboard" active />
        <NavItem icon={<BarChart className="h-5 w-5" />} text="Analytics" />
        <NavItem icon={<Receipt className="h-5 w-5" />} text="Reports" />
        <NavItem icon={<UserCircle className="h-5 w-5" />} text="Customers" />
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <NavItem icon={<Settings className="h-5 w-5" />} text="Settings" />
        <NavItem icon={<LifeBuoy className="h-5 w-5" />} text="Support" />
      </nav>
    </aside>
  );
};

const NavItem = ({ icon, text, active }: { icon: React.ReactNode, text: string, active?: boolean }) => (
  <a
    href="#"
    className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
      active ? 'bg-muted text-primary' : 'text-muted-foreground'
    }`}
  >
    {icon}
    <span className="hidden w-28 lg:inline">{text}</span>
  </a>
);

export default Sidebar;
