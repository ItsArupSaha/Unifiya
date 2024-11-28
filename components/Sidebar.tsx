"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  // extracting the current route
  const pathname = usePathname();

  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      {/* link container */}
      <div className="flex flex-1 flex-col gap-6">
        {/* loop over every links */}
        {sidebarLinks.map((link) => {
          // check if the link is active or not
          const isActive =
            pathname === link.route || pathname.startsWith(`${link.route}/`); // to properly mark the active link

          return (
            <Link
              href={link.route}
              key={link.label}
              className={cn(
                "flex gap-4 items-center p-4 rounded-lg justify-start",
                {
                  // if the link is active it will have a blue background
                  "bg-blue-1": isActive,
                }
              )}
            >
              {/* icons */}
              <Image
                src={link.imageUrl}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {link.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
