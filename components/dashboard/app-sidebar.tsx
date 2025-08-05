import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import {
  BarChartBig,
  ClipboardList,
  Globe2,
  Goal,
  LayoutDashboardIcon,
  Users,
} from "lucide-react";
import NavMain from "./nav-main";
import NavSecondary from "./nav-secondary";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Accounts",
      url: "/dashboard/accounts",
      icon: Users,
    },
    {
      title: "Transactions",
      url: "/dashboard/transactions",
      icon: ClipboardList,
    },
  ],
  navSecondary: [
    {
      title: "Budgets",
      url: "/dashboard/management/budgets",
      icon: BarChartBig,
    },
    {
      title: "Goals",
      url: "/dashboard/management/goals",
      icon: Goal,
    },
    {
      title: "Bills",
      url: "/dashboard/management/bills",
      icon: Globe2,
    },
  ],
};

const DashboardSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="#">
                <span className="text-base font-semibold">Flow</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} />
      </SidebarContent>
    </Sidebar>
  );
};

export default DashboardSidebar;
