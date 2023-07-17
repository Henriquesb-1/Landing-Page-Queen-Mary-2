import Carousel from "../carousel/Carousel";
import CarouselItem from "../carousel/CarouselItem";
import Characteristics from "./Characteristics";
import History from "./History";
import "./historyAndCharacteristics.css";

export default function HistoryAndCharacteristics() {
    return (
        <div className="history">
            <Carousel items={2}>
                <>
                    <CarouselItem>
                        <History />
                    </CarouselItem>

                    <CarouselItem>
                        <Characteristics />
                    </CarouselItem>
                </>
            </Carousel>
        </div>
    )
}