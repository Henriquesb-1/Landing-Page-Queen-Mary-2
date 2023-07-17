import up from "../../assets/imgs/svg/up.svg";
import down from "../../assets/imgs/svg/down.svg";

import title from "../../assets/imgs/title.jpg";

import "./header.css";

interface HeaderProps {
    onClick: (upOrDown: string) => void
    currentContentId: number;
    nextItem: string;
    previousItem: string;
}

export default function Header({ onClick, currentContentId, previousItem, nextItem }: HeaderProps) {
    const cantGoUp = currentContentId === 0;
    const cantGoDown = currentContentId === 3;

    return (
        <header>
            <div className="header-container">
                <div className="navegation">
                    <nav>
                        <button title={`Go to ${previousItem}`} onClick={() => onClick("up")} disabled={cantGoUp}>
                            {previousItem}
                            {cantGoUp ? <></> : <img src={up} alt="Previous section arrow" />}
                        </button>
                    </nav>
                </div>

                <div className="header-icon">
                    <a href="index.html">
                        <img src={title} alt="Ícone Queen Mary 2" />
                    </a>
                </div>

                <div className="navegation">
                    <nav>
                        <button title={`Go to ${nextItem}`} onClick={() => onClick("down")} disabled={cantGoDown}>
                            {nextItem}
                            {cantGoDown ? <></> : <img src={down} alt="Next section arrow" />}
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}