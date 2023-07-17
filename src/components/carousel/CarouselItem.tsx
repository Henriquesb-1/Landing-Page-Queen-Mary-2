import React from "react";

import "./carouselItem.css";

interface CarouselItemProps {
    children: React.JSX.Element;
}

export default function CarouselItem({ children }: CarouselItemProps) {
    return (
        <div className="carousel-item">
            {children}
        </div>
    )
}