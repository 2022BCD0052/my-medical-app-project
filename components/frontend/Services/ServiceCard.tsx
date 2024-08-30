import Image from "next/image";
import Link from "next/link";
import React from "react";
import {ServiceProps} from "@/types/types";
import imgCard from "@/public/Images/download.jpeg"
const ServiceCard = ({service}:{service:ServiceProps}) => {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="rounded bg-gray-300 border
        flex gap-4 overflow-hidden"
    >
      <Image
        src={service.image}
        width={180}
        height={900}
        alt={service.title}
        objectFit="cover"
        className="object-cover w-1/3"
      />
      <div className="flex flex-col w-2/3 justify-ce aspect-video">
        <h2>{service.title}</h2>
        <p>4345 Doctors available</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
