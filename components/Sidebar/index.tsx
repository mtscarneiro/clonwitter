import React from 'react';
import SidebarRow from "../SidebarRow";
import {
    BellIcon,
    BookmarkIcon,
    EnvelopeIcon,
    HashtagIcon,
    HomeIcon, PlusIcon,
    QueueListIcon,
    UserIcon
} from "@heroicons/react/24/outline";

const Sidebar = () => {
    return (
        <div
            className={
            "flex flex-col col-span-2 items-center px-4 md:items-start"
            }>
            <img
                className={"h-10 w-10 m-3"}
                src="https://links.papareact.com/drq"
                alt=""
            />
            <SidebarRow Icon={HomeIcon} title={"Home"} />
            <SidebarRow Icon={HashtagIcon} title={"Explore"} />
            <SidebarRow Icon={BellIcon} title={"Notifications"} />
            <SidebarRow Icon={EnvelopeIcon} title={"Messages"} />
            <SidebarRow Icon={BookmarkIcon} title={"Bookmarks"} />
            <SidebarRow Icon={QueueListIcon} title={"Lists"} />
            <SidebarRow Icon={UserIcon} title={"Sign In"} />
            <SidebarRow Icon={PlusIcon} title={"More"} />

        </div>
    )
}

export default Sidebar