"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { title } from "process";
import { Description } from "@headlessui/react";


const megaMenu = [
  {
    title: "Top Booked",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
    ],
  },
  {
    title: "Specilist",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
    ],
  },
  {
    title: "Doctor",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
    ],
  },
  {
    title: "Top Booked",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
    ],
  },
  {
    title: "Top Booked",
    services: [
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
      {
        title: "Telehealth",
        slug: "tele-health",
        Description:
          " lorLorem ipsum dolor si ut  inventore recusandae ipsa cum excepturi dolore delectus libero rem sequi nobis non ",
      },
    ],
  },
];


export default function MegaMenu() {
  return (
    <NavigationMenu className="flex ">
      <NavigationMenuList className="space-x-4">
        {
            megaMenu.map((item,i)=>{
                return(
                    <NavigationMenuItem key={i}>
          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {item.services.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={`/services${component.slug}`}
                >
                  {component.Description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
                )
            })
        }
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
