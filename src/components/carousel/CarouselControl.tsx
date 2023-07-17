import { Dispatch, SetStateAction, useState } from "react";

import "./carouselControl.css";

interface CarouselControlProps {
    items: number;
    itemOffset: number;
    setItemOffset: Dispatch<SetStateAction<number>>;
}

export default function CarouselControl({ items, itemOffset, setItemOffset }: CarouselControlProps) {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    function carouselControl(previousOrNext: string) {
        if (previousOrNext === "previous") {
            setItemOffset(itemOffset + 100);
            setCurrentSlide(currentSlide - 1);
        } else if (previousOrNext === "next") {
            setItemOffset(itemOffset - 100);
            setCurrentSlide(currentSlide + 1);
        }
    }

    return (
        <>
            <div className="navigation-button previous">
                {currentSlide === 0 ? <></> : <span className="current-slide">{currentSlide + 1}/{items}</span>}
                <button className="title-room" title="Anterior" disabled={currentSlide === 0} onClick={() => carouselControl("previous")}>
                    <svg width="36px" height="36px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <polyline fill="none" stroke={currentSlide === 0 ? "#fff2" : "#fff"} strokeWidth="2" points="7 2 17 12 7 22" transform="matrix(-1 0 0 1 24 0)" />
                    </svg>
                </button>
            </div>

            <div className="navigation-button next">
                {currentSlide === items - 1 ? <></> : <span className="current-slide">{currentSlide + 1}/{items}</span>}
                <button className="title-room" title="Próximo" disabled={currentSlide === items - 1} onClick={() => carouselControl("next")}>
                    <svg fill={currentSlide === items - 1 ? "#fff2" : "#fff"} height="36px" width="36px" version="1.1" id="XMLID_287_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g id="next">
                            <g>
                                <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12" />
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </>
    )
}