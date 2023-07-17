import Planetary from "./attractions/Planetary";
import Library from "./attractions/Library";
import MusicLive from "./attractions/MusicLive";
import KidsRoom from "./attractions/KidsRoom";
import Carousel from "../carousel/Carousel";
import CarouselItem from "../carousel/CarouselItem";

import "./attraction.css";

export default function Attraction() {
    return (
        <div className="atracao-container">
            <div className="atracao-title-container">
                <h2 className="atracao-titulo">
                    Atrações
                </h2>
                <p>
                    <strong>
                        O Queen Mary 2 oferece várias atrações, algumas delas são:
                    </strong>
                </p>
            </div>

            <Carousel items={4}>
                <>
                    <CarouselItem>
                        <Planetary />
                    </CarouselItem>

                    <CarouselItem>
                        <Library />
                    </CarouselItem>

                    <CarouselItem>
                        <MusicLive />
                    </CarouselItem>

                    <CarouselItem>
                        <KidsRoom />
                    </CarouselItem>
                </>
            </Carousel>
        </div>
    )
}