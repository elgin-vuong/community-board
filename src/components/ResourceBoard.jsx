import React from "react";
import ResourceCard from "./ResourceCard";
import { resources } from "../data/resources";
import "./ResourceBoard.css";

const ResourceBoard = () => {
  return (
    <div className="ResourceBoard">
      {resources.map((item, index) => (
        <ResourceCard
            key={index}
            title={item.title}
            link={item.link}
            color={item.color}
            image={item.image}
        />
      ))}
    </div>
  );
};

export default ResourceBoard;