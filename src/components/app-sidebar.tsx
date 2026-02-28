// "use client";

// import * as React from "react";
// import { useLocation } from "react-router-dom";

// import {
//   IconChartBar,
//   IconDashboard,
//   IconFolder,
//   IconHelp,
//   IconInnerShadowTop,
//   IconLogout,
//   IconSettings,
//   IconUsers,
// } from "@tabler/icons-react";

// import { NavDocuments } from "@/components/nav-documents";
// import { NavMain } from "@/components/nav-main";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";

// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//   const location = useLocation();

//   const navMain = [
//     {
//       title: "Dashboard",
//       url: "/dashboard",
//       icon: IconDashboard,
//       isActive: location.pathname === "/dashboard",
//     },
//     {
//       title: "Analytics",
//       url: "/dashboard/analytics",
//       icon: IconChartBar,
//       isActive: location.pathname.startsWith("/dashboard/analytics"),
//     },
//     {
//       title: "Projects",
//       url: "/dashboard/projects",
//       icon: IconFolder,
//       isActive: location.pathname.startsWith("/dashboard/projects"),
//     },
//     {
//       title: "Team",
//       url: "/dashboard/team",
//       icon: IconUsers,
//       isActive: location.pathname.startsWith("/dashboard/team"),
//     },
//   ];
//   const GENERAL = [
//     {
//       name: "Settings",
//       url: "#",
//       icon: IconSettings,
//     },
//     {
//       name: "Help",
//       url: "#",
//       icon: IconHelp,
//     },
//     {
//       name: "Logout",
//       url: "#",
//       icon: IconLogout,
//     },
//   ];

//   return (
//     <Sidebar
//       collapsible="offcanvas"
//       className="mr-2 rounded-2xl  bg-background"
//       {...props}
//     >
//       <SidebarHeader className="m-auto w-[80%]">
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <SidebarMenuButton
//               asChild
//               className="text-center data-[slot=sidebar-menu-button]:p-5!"
//             >
//               <a href="#">
//                 <IconInnerShadowTop className="size-5! text-green-700" />
//                 <span className="text-base font-semibold"> DONEZO</span>
//               </a>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarHeader>

//       <SidebarContent>
//         <NavMain items={navMain} />
//         <NavDocuments items={GENERAL} />
//       </SidebarContent>

//       <SidebarFooter>
//         <div className="bg-linear-to-br from-green-600 to-green-800 text-white mx-5 p-6 rounded-2xl shadow-lg">
//           <p className="text-sm">Total Projects</p>
//           <h2 className="text-4xl font-bold mt-2">24</h2>
//           <p className="text-xs mt-2 opacity-80">Increased from last month</p>
//         </div>{" "}
//       </SidebarFooter>
//     </Sidebar>
//   );
// }
"use client";

import * as React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  IconChartBar,
  IconDashboard,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconLogout,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Logout function added
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navMain = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: IconDashboard,
      isActive: location.pathname === "/dashboard",
    },
    {
      title: "Analytics",
      url: "/dashboard/analytics",
      icon: IconChartBar,
      isActive: location.pathname.startsWith("/dashboard/analytics"),
    },
    {
      title: "Projects",
      url: "/dashboard/projects",
      icon: IconFolder,
      isActive: location.pathname.startsWith("/dashboard/projects"),
    },
    {
      title: "Team",
      url: "/dashboard/team",
      icon: IconUsers,
      isActive: location.pathname.startsWith("/dashboard/team"),
    },
  ];

  const GENERAL = [
    {
      name: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      name: "Help",
      url: "#",
      icon: IconHelp,
    },
    {
      name: "Logout",
      url: "#",
      icon: IconLogout,
      onClick: handleLogout, // ✅ only addition
    },
  ];

  return (
    <Sidebar
      collapsible="offcanvas"
      className="mr-2 rounded-2xl  bg-background"
      {...props}
    >
      <SidebarHeader className="m-auto w-[80%]">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="text-center data-[slot=sidebar-menu-button]:p-5!"
            >
              <a href="#">
                <IconInnerShadowTop className="size-5! text-green-700" />
                <span className="text-base font-semibold"> DONEZO</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navMain} />
        <NavDocuments items={GENERAL} />
      </SidebarContent>

      <SidebarFooter>
        <div className="bg-linear-to-br from-green-600 to-green-800 text-white mx-5 p-6 rounded-2xl shadow-lg">
          <p className="text-sm">Total Projects</p>
          <h2 className="text-4xl font-bold mt-2">24</h2>
          <p className="text-xs mt-2 opacity-80">Increased from last month</p>
        </div>{" "}
      </SidebarFooter>
    </Sidebar>
  );
}
