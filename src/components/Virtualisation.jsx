import { useEffect, useState } from 'react';
import './Virtualisation.css';

const dataSet = new Array(100).fill(0).map((val, idx) => idx);
const divHeightWithGaps = 60;

const Virtualisation = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [visibleDataSet, setVisibleDataSet] = useState({
        starti: 0,
        endi: 10
    });

    const handleScroll = () => {
        const pos = window.pageYOffset;
        console.log({ scrollX, screenTop, scrollPosition, scrollY, screenY });
        setScrollPosition(pos);
    }

    console.log({ scrollPosition, visibleDataSet });

    useEffect(() => {
        document.getElementById('virtual-container').addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            document.getElementById('virtual-container').removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        const numOfElemsOnScreen = parseInt(Math.ceil(screen.availHeight/divHeightWithGaps));
        const si = parseInt(Math.floor(scrollPosition/divHeightWithGaps)); // idx of first div appearing in viewport
        const ei = si + numOfElemsOnScreen;

        setVisibleDataSet({starti: si, endi: ei});
    }, [scrollPosition])

    console.log({ visibleDataSet });

    return (
        <div id='virtual-container'>
            {dataSet.map((v, idx) => <div className="content-row" key={idx+1}>Row: {idx+1}</div>)}
        </div>
    )
}

export default Virtualisation;
