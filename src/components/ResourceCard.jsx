import React from "react";
import "./ResourceCard.css";

const ResourceCard = ({ title, link, color, image }) => {
    return (
        <div className={`ResourceCard ${color}`}>
            <img src={image} alt={`${title} logo`} className="resource-image" />
            <h3>{title}</h3>
            <a href={link} target="_blank" rel="noopener noreferrer">Learn</a>
        </div>
    )
}

export default ResourceCard;