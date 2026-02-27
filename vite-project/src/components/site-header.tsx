import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { IconSearch, IconBell, IconMessageCircle } from "@tabler/icons-react";
import avatar from "../assets/download.jfif";

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b px-4 lg:px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-2">
        {/* Sidebar toggle */}
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-6"
        />

        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Input type="text" placeholder="Search..." className="pl-10" />
          <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        {/* Right side icons and user */}
        <div className="ml-auto flex items-center gap-4">
          {/* SMS/Chat icon */}
          <Button
            variant="ghost"
            size="sm"
            className="bg-slate-100 p-4 rounded-full"
          >
            <IconMessageCircle className="h-5 w-5" />
          </Button>

          {/* Notification/Bell icon */}
          <Button
            variant="ghost"
            size="sm"
            className="bg-slate-100 p-4 rounded-full"
          >
            <IconBell className="h-5 w-5 " color="black" />
          </Button>

          {/* User avatar + info */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src={avatar}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:flex flex-col text-sm">
              <span className="font-medium">John Doe</span>
              <span className="text-gray-500">john@example.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
