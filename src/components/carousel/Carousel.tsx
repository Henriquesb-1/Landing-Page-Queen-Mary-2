import React, { useState } from "react";
import "./carousel.css";
import CarouselControl from "./CarouselControl";

interface CarouselProps {
    children: React.JSX.Element;
    items: number
}

export default function Carousel({ items, children }: CarouselProps) {
    const [Offset, setOffset] = useState<number>(0);

    return (
        <div className="carousel-container">
            <CarouselControl items={items} itemOffset={Offset} setItemOffset={setOffset} />

            <div className="carousel" style={{ gridTemplateColumns: `repeat(${items}, 100%)`, left: `${Offset}%`}}>
                {children}
            </div>
        </div>
    )
}