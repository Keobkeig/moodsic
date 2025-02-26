import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarSeparator
  } from "@/components/ui/sidebar"
import {Library, Plus, ArrowRight, PanelLeftClose, Search, List} from "lucide-react"
import Image from "next/image"

export function AppSideBar() {
    const playlists: SideBarPlayList[] = [
        {
            album_cover: "/playlist_cover.jpeg",
            album_name: "My Playlist",
            pinned: true,
            author: "Your Daily Mix"
        },
        {
            
            album_cover: "/playlist_cover.jpeg",
            album_name: "My Playlist",
            pinned: false,
            author: "Discover Weekly"
        },
    ]
    return (
        <Sidebar className="bg-[#141414] flex flex-col h-full hidden lg:flex rounded-lg">
            <SidebarHeader title="MoodSic"/>
            <SidebarContent className="bg-[#242424] rounded-lg w-[95%] mx-auto">
                {SideBarTop()}
                <SidebarSeparator />
                {SideBarSearch()}
                <SideBarMusicList playlists={playlists} />
            </SidebarContent>
        </Sidebar>
    )
}

type SideBarPlayList = {
    album_cover: string;
    album_name: string;
    author: string;
    pinned: boolean;
}

function SideBarMusicList({ playlists }: { playlists: SideBarPlayList[] }) {
    const sortedPlaylists = [...playlists].sort((a,b) => {
        if (a.pinned === b.pinned) return 0;
        return a.pinned ? -1: 1;
    })

    return <SidebarGroup className="px-2 flex flex-col space-y-2 rounded-lg">
        {sortedPlaylists.map((playlist, index) => (
            <SidebarMenuButton key={index} className="w-full h-[64px] px-4">
                <a href="#" className="flex items-center gap-3 p-2 rounded-md transition-colors h-[64px] w-full">
                    <Image 
                        src={playlist.album_cover}
                        alt={playlist.album_name} 
                        width={48} 
                        height={48}
                        //add a triangle over the image when hovered
                        className="rounded-md hover:brightness-50 hover:scale-105 transition-transform"
                    />
                    <div className="flex flex-col">
                        <span className="text-sm font-medium">{playlist.album_name}</span>
                        <div className="flex flex-row">
                            {playlist.pinned && (
                                    <span className="text-xs text-gray-400 px-1">📌·</span>
                            )}
                            <span className="text-xs text-gray-400"> {playlist.author}</span>
                        </div>
                    </div>
                </a>
            </SidebarMenuButton>
        ))}
    </SidebarGroup>
}

function SideBarSearch() {
    return <SidebarGroup className="flex flex-row px-6  group-data-[state=collapsed]:hidden">
        <SidebarMenuButton className="flex items-center px-5">
            <a href="#">
                <Search />
            </a>
        </SidebarMenuButton>
        <div className="ml-auto">
            <SidebarMenuButton className="flex items-center px-4">
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

    return <SidebarHeader className="rounded-lg bg-[#242424] mx-auto w-11/12">
        <SidebarGroupContent>
            <SidebarMenu className="flex flex-row items-center justify-between w-full no-wrap p-2">
                <div className="flex items-center gap-2">
                    <SidebarMenuButton key={library.title} className="flex items-center h-[64px]">
                        <a href={library.url} className="flex items-center">
                            <library.icon className="flex-shrink-0 w-9 h-9" />
                            <span className="leading-none text-lg">{library.title}</span>
                        </a>
                    </SidebarMenuButton>
                </div>

                <div className="flex items-center group-data-[state=collapsed]:hidden">
                    {sideBarLogoRow.map((item) => <SidebarMenuButton key={item.title}>
                        <a href={item.url} className="">
                            <item.icon />
                            <span>{item.title}</span>
                        </a>
                    </SidebarMenuButton>
                    )}
                </div>
            </SidebarMenu>

            <SidebarMenuButton className="flex items-center px-4 hover:bg-[#242424] transition-colors">
                <a href="#" className="flex items-center gap-2 p-2 bg-[#383838] hover:bg-[#242424] transition-colors rounded-lg">
                    <span className="leading-none text-lg">Playlists</span>
                </a>
            </SidebarMenuButton>
        </SidebarGroupContent>
    </SidebarHeader>
}
