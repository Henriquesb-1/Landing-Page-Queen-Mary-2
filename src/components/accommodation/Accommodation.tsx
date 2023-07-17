import Carousel from "../carousel/Carousel";
import CarouselItem from "../carousel/CarouselItem";

import LuxuryRoom from "./rooms/LuxuryRoom";
import SimpleRoom from "./rooms/SimpleRoom";

import "./accommodation.css";

export default function Accommodation() {
    return (
        <div className="accommodation-container">
            <div className="accommodation-title">
                <p style={{ textAlign: "center" }}>
                    <strong>
                        O Queen Mary possui 23 opções de acomodações.
                        <br />
                        Iremos ver um dos mais simples e um dos mais luxuosos.
                    </strong>
                </p>
            </div>

            <div className="rooms">
                <Carousel items={2}>
                    <>
                        <CarouselItem>
                            <SimpleRoom />
                        </CarouselItem>

                        <CarouselItem>
                            <LuxuryRoom />
                        </CarouselItem>
                    </>
                </Carousel>
            </div>
        </div>
    )
}