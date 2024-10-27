import { MenuProps } from "antd"
import Link from "next/link";
import React from "react";
import { MdCategory } from "react-icons/md";


export const sidebarItems = ()=>{
  const setIconSize = (icon: React.ReactNode, size: string) =>
  React.cloneElement(icon as React.ReactElement, { style: { fontSize: size } });


    
      const adminSidebarItems: MenuProps["items"] = [
    
        {
          label: <Link href={`/dashboard/project`}> User</Link>,
          icon: setIconSize(<MdCategory />,"1.2rem"),
          key: `/project`,
        },
        {
          label: <Link href={`/dashboard/project`}> Company</Link>,
          icon: setIconSize(<MdCategory />,"1.2rem"),
          key: `/project`,
        },
       
      ];
    
    
     
    
  return adminSidebarItems;


}