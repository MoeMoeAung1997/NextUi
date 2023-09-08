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
import cilChevronBottom from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
import {
  Button,
  ButtonGroup,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import { ReactNode } from "react";

export type DropdownItemSelectedProps = {
  icon?: ReactNode;
  isSelected?: boolean;
  isDisabled?: boolean;
};

//type selectedIcon?: ReactNode | (( props: DropdownItemSelectedProps) => ReactNOde) | null;
export default function NavbarPage() {
  const [selectedOption, setSelectedOption] = React.useState(
    new Set(["merge"])
  );

  //type selectedIcon?: ReactNode | (( props: DropdownItemSelectedProps) => ReactNOde) | null;

  interface descriptionMapProps {
    merge: string;
    squash: string;
    //rebase: string;
  }
  const descriptionMap: descriptionMapProps[] = [
    {
      merge: "v1.1.1",
      squash: "v2.1.1",
      //squash: "All People",
      //rebase: "All animals",
    },
    // {
    //   merge: "All content",
    //   squash: "All People",
    //   //rebase: "All animals",
    // },
  ];

  const labelMap: { [key: string]: string } = {
    merge: "v2.1.0",
    squash: "v1.1.1",
    //squash: "squash and merge",
    //rebase: "Rebase and merge",
  };

  const selectedOptionValue: string = Array.from(selectedOption)[0];
  return (
    <Navbar style={{ backgroundColor: "black" }}>
      <NavbarBrand>
        <h1 className="font-bold  text-xxl">Next UI</h1>
        {/* <Button className="heigh-10">v2.1.10</Button> */}

        <ButtonGroup variant="flat">
          <Button size="sm">{labelMap[selectedOptionValue]}</Button>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button isIconOnly size="sm">
                <CIcon icon={icon.cilChevronBottom} size="sm" height={20} />
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Merge options"
              selectedKeys={selectedOption}
              selectionMode="single"
              onSelectionChange={setSelectedOption}
              className="max-w-[300px]"
            >
              <DropdownItem key="merge" description={descriptionMap[0].merge}>
                {labelMap["merge"]}
              </DropdownItem>
              <DropdownItem key="squash" description={descriptionMap[0].merge}>
                {labelMap["squash"]}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </ButtonGroup>
        {/* <Dropdown>
          <DropdownTrigger>
            <Button>v2.1.10</Button>
            <CIcon icon={icon.cilChevronBottom} />
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem key="new">v2.1.10</DropdownItem>
            <DropdownItem key="new">v1.0.0</DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
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
