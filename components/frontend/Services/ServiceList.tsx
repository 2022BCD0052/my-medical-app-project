import React from "react";
import ServiceCard from "@/components/frontend/Services/ServiceCard";
import {ServiceProps} from "@/types/types";

const ServiceList: React.FC<{ data: ServiceProps[] }> = ({ data }) => {
  return (
    <div className=" grid lg:grid-flow-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
      {
        data.map((service,i) =>{
          return (
            <ServiceCard key={i} service={service}/>
          );
        }) 
      }
    </div>
  );
};

export default ServiceList;
