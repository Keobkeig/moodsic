import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
  } from "@/components/ui/sidebar"
import {Library, Plus, ArrowRight, PanelLeftClose, Search, List} from "lucide-react"

export function AppSideBar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader title="MoodSic" />
            <SidebarContent>
                {SideBarTop()}
                {SideBarSearch()}
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

function SideBarSearch() {
    return <SidebarGroup className="flex flex-row px-6 group-data-[state=collapsed]:hidden">
        <SidebarMenuButton>
            <a href="#">
                <Search />
            </a>
        </SidebarMenuButton>
        <div className="ml-auto">
            <SidebarMenuButton>
                <a href="#" className="flex items-center gap-2">
                    <span>Recents</span>
                    <List />
                </a>
            </SidebarMenuButton>
        </div>

    </SidebarGroup>
}

function SideBarTop() {
    const library = {
        title: "Your Library",
        url: "#",
        icon: Library
    }
    
    const sideBarLogoRow = [
        {
            title: "",
            url: "#",
            icon: Plus,
            alt: "Add Playlist"
        },
        {
            title: " ",
            url: "#",
            icon: ArrowRight,
            alt: "Show More"
        }
    ]

    return <SidebarHeader className="rounded-lg bg-gray-100 gap-4 mx-auto w-11/12 pb-6">
        <SidebarGroupContent>
            <SidebarMenu className="flex flex-row items-center justify-between w-full no-wrap p-3">
                <div className="flex items-center gap-2">
                    <SidebarMenuButton key={library.title} className="flex items-center">
                        <a href={library.url} className="flex items-center gap-2">
                            <library.icon className="flex-shrink-0 w-6 h-6" />
                            <span className="leading-none text-lg">{library.title}</span>

                        </a>
                    </SidebarMenuButton>
                </div>

                <div className="flex items-center group-data-[state=collapsed]:hidden">
                    {sideBarLogoRow.map((item) => <SidebarMenuButton key={item.title}>
                        <a href={item.url}>
                            <item.icon />
                            <span>{item.title}</span>
                        </a>
                    </SidebarMenuButton>
                    )}
                </div>
            </SidebarMenu>

            <SidebarMenuButton className="flex items-center px-4">
                <a href="#" className="rounded-lg flex items-center gap-2 bg-gray-200 p-2">
                    <PanelLeftClose className="flex-shrink-0 w-6 h-6" />
                    <span className="leading-none text-lg">Playlists</span>
                </a>
            </SidebarMenuButton>
        </SidebarGroupContent>

    </SidebarHeader>
}
