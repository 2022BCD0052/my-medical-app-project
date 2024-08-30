import React from "react";
import { Tabs } from "flowbite-react";
import { Stethoscope } from "lucide-react";
import { GiDoctorFace } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import ServiceList from "./Services/ServiceList";
import LinkCard from "./Doctors/LinkCard";
import imgCard from "@/public/Images/download.jpeg"



export default function TabbedItems() {
const services = [
  {
    title: "Telehealth",
    image: imgCard,
    slug: "tele-health",
  },
  {
    title: "Telemedicine",
    image: imgCard,
    slug: "telemedicine",
  },
  {
    title: "Psychology",
    image: imgCard,
    slug: "psychology",
  },
  {
    title: "Dentistry",
    image: imgCard,
    slug: "dentistry",
  },
];

const tabs = [
  {
    title: "Popular Services",
    icon: Stethoscope,
    content: <ServiceList data={services} />,
   
  },
  {
    title: "Doctors",
    icon: GiDoctorFace,
    component: <LinkCard className="bg-blue-500" />,
  },
  {
    title: "Specialist",
    icon: MdDashboard,
    component: <LinkCard className="bg-red-500" />,
  },
  {
    title: "Symptoms",
    icon: MdDashboard,
    component: null, // No component for this tab
  },
];


  return (
    <div className="overflow-x-auto">
      <Tabs aria-label="Full width tabs" variant="fullWidth">
        {tabs.map((tab, index) => (
          <Tabs.Item
            key={index}
            active={tab.title === "Popular Services"}
            title={tab.title}
            icon={tab.icon}
          >
            {tab.component}
          </Tabs.Item>
        ))}
      </Tabs>
    </div>
  );
}
