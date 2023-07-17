import { useEffect, useState } from 'react';
import './QM2.css';
import Accommodation from './components/accommodation/Accommodation';
import Attraction from './components/attraction/Attraction';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HistoryAndCharacteristics from './components/history/HistoryAndCharacteristics';
import HomeTemplate from './components/home/Home';

interface items {
  id: number;
  name: string;
}

const itemsToShow: items[] = [{
  id: 0,
  name: "Início"
}, {
  id: 1,
  name: "História e características"
}, {
  id: 2,
  name: "Acomodações"
}, {
  id: 3,
  name: "Atrações"
}]

export default function QM2() {
  const [items] = useState<items[]>(itemsToShow);
  const [contentOffset, setContentOffset] = useState<number>(0);
  const [currentContent, setCurrentContent] = useState<number>(0);

  function contentControl(upOrDown: string) {
    if (upOrDown === "down") {
      setContentOffset(contentOffset + 100);
      setCurrentContent(currentContent + 1);
    } else if (upOrDown === "up") {
      setContentOffset(contentOffset - 100);
      setCurrentContent(currentContent - 1);
    }
  }

  return (
    <>
      <Header onClick={upOrDown => contentControl(upOrDown)} currentContentId={currentContent}
        previousItem={items[currentContent - 1]?.name || "Início"}
        nextItem={items[currentContent + 1]?.name || items[items.length - 1].name}
      />
      <main className="main">
        <div className="main-carousel" style={{ bottom: `${contentOffset}%` }}>
          <div className="main-content n1">
            <HomeTemplate />
          </div>

          <div className="main-content n2">
            <HistoryAndCharacteristics />
          </div>

          <div className="main-content n3">
            <Accommodation />
          </div>

          <div className="main-content n4">
            <Attraction />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
