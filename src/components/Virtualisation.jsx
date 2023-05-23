import { useEffect, useState } from 'react';
import './Virtualisation.css';

const dataSet = new Array(100).fill(0).map((val, idx) => idx);
const divHeightWithGaps = 100;

const Virtualisation = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [visibleDataSet, setVisibleDataSet] = useState({
        starti: 0,
        endi: 10
    });
    const [visibleListItems, setVisibleListItems] = useState([]);


    const handleScroll = () => {
        const pos = window.pageYOffset;
        setScrollPosition(pos);
    }

    console.log({ scrollPosition, visibleDataSet });

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

        setVisibleDataSet({starti: si, endi: ei});
    }, [scrollPosition])

    useEffect(() => {
        setVisibleListItems(dataSet.slice(visibleDataSet.starti, visibleDataSet.endi));
    }, [visibleDataSet.starti, visibleDataSet.endi])


    return (
        <>
            {visibleListItems.map((v, idx) => <div className="content-row" key={idx+1}>Row: {idx+1}</div>)}
        </>
    )
}

export default Virtualisation;