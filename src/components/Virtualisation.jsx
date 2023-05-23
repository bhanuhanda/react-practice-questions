import { useEffect, useState } from 'react';
import './Virtualisation.css';

const dataSet = new Array(100).fill(0);
const divHeightWithGaps = 100;

const Virtualisation = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [visibleDataSet, setVisibleDataSet] = useState({
        starti: 0,
        endi: 10
    });

    const handleScroll = () => {
        const pos = window.pageYOffset;
        setScrollPosition(pos);
    }

    console.log({ scrollPosition });

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        const numOfElemsOnScreen = parseInt(Math.ceil(screen.availHeight/divHeightWithGaps));
        const si = parseInt(Math.floor(scrollPosition/divHeightWithGaps)); // idx of first div appearing in viewport
        const ei = si + numOfElemsOnScreen + 1;

        console.log({ si, ei });
        setVisibleDataSet({starti: si, end: ei});
    }, [scrollPosition])

    return (
        <>
            {dataSet.slice(visibleDataSet.starti, visibleDataSet.endi).map((v, idx) => <div className="content-row" key={idx+1}>Row: {idx+1}</div>)}
        </>
    )
}

export default Virtualisation;