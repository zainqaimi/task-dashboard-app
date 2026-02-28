// "use client";

// import {
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";
// import type { Icon } from "@tabler/icons-react";

// export function NavDocuments({
//   items,
// }: {
//   items: {
//     name: string;
//     url: string;
//     icon: Icon;
//   }[];
// }) {
//   return (
//     <SidebarGroup className="group-data-[collapsible=icon]:hidden">
//       <SidebarGroupLabel>GENERAL</SidebarGroupLabel>
//       <SidebarMenu>
//         {items.map((item) => (
//           <SidebarMenuItem key={item.name}>
//             <SidebarMenuButton asChild>
//               <a href={item.url}>
//                 <item.icon />
//                 <span>{item.name}</span>
//               </a>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         ))}
//       </SidebarMenu>
//     </SidebarGroup>
//   );
// }
"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import type { Icon } from "@tabler/icons-react";

export function NavDocuments({
  items,
}: {
  items: {
    name: string;
    url: string;
    icon: Icon;
    onClick?: () => void; // ✅ added only this
  }[];
}) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>GENERAL</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            {item.onClick ? (
              <SidebarMenuButton onClick={item.onClick}>
                <item.icon />
                <span>{item.name}</span>
              </SidebarMenuButton>
            ) : (
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.name}</span>
                </a>
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
