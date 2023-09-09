"use client";
import { Card, Textarea } from "@nextui-org/react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { cilChevronBottom, cilCircle } from "@coreui/icons";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
//import { RiArrowDropDownLine } from "react-icons/"
import { FaAngleDown } from "react-icons/fa";
import { IoIosRadioButtonOn } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { HiOutlineSun } from "react-icons/hi";
import { FaDiscord } from "react-icons/fa";
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

export default function NavbarPage() {
  const [selectedOption, setSelectedOption] = React.useState(
    new Set(["merge"])
  );

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  interface descriptionMapProps {
    merge: string;
    squash: string;
  }
  const descriptionMap: descriptionMapProps[] = [
    {
      merge: "v1.1.1",
      squash: "v2.1.1",
    },
  ];

  const labelMap: { [key: string]: string } = {
    merge: "v2.1.0",
    squash: "v1.1.1",
  };

  const selectedOptionValue: string = Array.from(selectedOption)[0];
  return (
    <Navbar style={{ backgroundColor: "black" }}>
      <NavbarBrand>
        <h1 className="font-bold  text-5xl">Next UI</h1>
        {/* <Button className="heigh-10">v2.1.10</Button> */}

        <ButtonGroup variant="flat">
          <Button size="sm">{labelMap[selectedOptionValue]}</Button>
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Button isIconOnly size="sm">
                <FaAngleDown />
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
          <Button as={Link} href="#" variant="flat">
            {/* <CIcon icon={icon.cilCircle} size="sm" height={10} color="green" /> */}
            <IoIosRadioButtonOn color="green" />
            New components v2.1.0
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <FaGithub />
        <IoLogoTwitter />
        <FaDiscord />
        <HiOutlineSun />
      </NavbarContent>
      <NavbarContent>
        {/* <Textarea placeholder="Quick Search..." width={100} height={20}>
        
        </Textarea> */}
        <Button onPress={onOpen}>
          Quick Search...<Button>K</Button>
        </Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>
                  <Textarea placeholder="Search documentation" />
                </ModalHeader>
                <ModalFooter>
                  {/* <Button color="primary" variant="light" onPress={onClose}>
                    Close
                  </Button> */}
                  <ModalBody>
                    <Button>Custom Styles</Button>
                  </ModalBody>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </NavbarContent>
      <NavbarContent>
        <Button>
          {" "}
          <FaHeart color="red" />
          Sponsor
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
