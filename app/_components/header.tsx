"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { LogInIcon, LogOutIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  const { data } = useSession();

  const handleSignOutClick = () => signOut();
  return (
    <header className="flex justify-between px-5 pb-0 pt-6">
      <Link href="/">
        <Image src="/logo.png" alt="Ifood clone logo" height={30} width={150} />
      </Link>
      <Sheet>
        <SheetTrigger>
          <Button
            size="icon"
            variant="outline"
            className="border-none bg-transparent"
          >
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          {data?.user ? (
            <>
              <div className="flex justify-between pt-6">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={data.user.image as string | undefined}>
                      <AvatarFallback>
                        {data.user.name?.split(" ")[0][0]}
                        {data.user.name?.split(" ")[1][0]}
                      </AvatarFallback>
                    </AvatarImage>
                  </Avatar>

                  <div>
                    <h3 className="font-semibold">{data.user.name}</h3>
                    <span className="block text-xs text-muted-foreground">
                      {data.user.email}
                    </span>
                  </div>
                </div>

                <Button size={"icon"} onClick={handleSignOutClick}>
                  <LogOutIcon size={"20"} />
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className="flex w-full items-center justify-between pt-10">
                <h2 className="font-semibold">Faça seu login</h2>
                <Button size={"icon"} onClick={() => signIn()}>
                  <LogInIcon />
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
