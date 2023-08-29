"use client";
import { Card } from "@nextui-org/react";
//import {AcmeLogo} from "./AcmeLogo.jsx";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
export default function Home() {
  return (
    <Navbar style={{ backgroundColor: "black" }}>
      <NavbarBrand>
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className=" sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#" color="gray">
            Docs
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Components
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="red" href="#">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="red" href="#">
            Figma
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            New components v2.1.0
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
