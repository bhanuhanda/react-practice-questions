import { useState, useEffect, useRef } from 'react';

const LargeList = () => {
  const itemCount = 1000;
  const dataSet = new Array(itemCount).fill(0).map((val, idx) => idx+1);

  const itemHeight = 50;
  const containerHeight = 500;

  const containerRef = useRef(null);
  const [visibleIndeces, setVisibleIndeces] = useState({
    startIndex: 0,
    endIndex: Math.ceil(containerHeight/itemHeight)
  })

  const handleScroll = () => {
    const { scrollTop } = containerRef.current;
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = Math.ceil((scrollTop + containerHeight) / itemHeight);
    setVisibleIndeces({
        startIndex: newStartIndex,
        endIndex: newEndIndex
    })
  };

  useEffect(() => {
    const scrollContainer = containerRef.current;

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div
      ref={containerRef}
      style={{ height: containerHeight, width: '300px', overflow: 'auto' }}
    >
      <div style={{ height: itemCount * itemHeight, paddingTop: visibleIndeces.startIndex * itemHeight }}>
        {dataSet.slice(visibleIndeces.startIndex, visibleIndeces.endIndex).map(val => {
            return <p key={val}>{val}</p>
        })}
      </div>
    </div>
  );
};

export default LargeList;
