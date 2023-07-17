import childrenRoom from "../../../assets/imgs/attraction/qm2childrenroom.jpg";

import "./slideContent.css";

export default function KidsRoom() {
    return (
        <div className="kidsRoom slide">
            <div className="attraction-image">
                <img src={childrenRoom} alt="children room on board of queen mary 2" />
            </div>
            <div className="attraction-description">
                <h2> Sala de Crianças </h2>
                <p>
                    Crianças de todas as idades são bem-vindas aqui, e os clubes dedicados oferecem
                    atividades e entretenimento.<br />
                    Isso inclui artes e ofícios, atividades esportivas, áreas de lazer, jogos de
                    computador e muito mais.<br />
                    Eles podem fazer amizade com outras crianças na The Play Zone, para crianças de
                    dois
                    a sete anos, e na The Zone, que é ideal para crianças de oito a 17 anos.<br />
                    Uma equipe de jovens supervisionará seus filhos, organizará eventos, atividades
                    e
                    competições, e até mesmo "excursões" ao teatro ou cinema a bordo.
                </p>
            </div>
        </div>
    )
}