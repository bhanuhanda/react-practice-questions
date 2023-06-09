import { useState, useEffect, useRef } from 'react';

const LargeList = () => {
  const itemCount = 1000;
  const itemSize = 50;
  const containerHeight = 500;
  const containerRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(Math.ceil(containerHeight / itemSize));

  const handleScroll = () => {
    const { scrollTop } = containerRef.current;
    const newStartIndex = Math.floor(scrollTop / itemSize);
    const newEndIndex = Math.ceil((scrollTop + containerHeight) / itemSize);
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  };

  useEffect(() => {
    containerRef.current.addEventListener('scroll', handleScroll);
    return () => {
      containerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderedItems = [];
  for (let i = startIndex; i < endIndex && i < itemCount; i++) {
    renderedItems.push(<div key={i} style={{ height: itemSize }}>{i + 1}</div>);
  }

  return (
    <div
      ref={containerRef}
      style={{ height: containerHeight, width: '300px', overflow: 'auto' }}
    >
      <div style={{ height: itemCount * itemSize, paddingTop: startIndex * itemSize }}>
        {renderedItems}
      </div>
    </div>
  );
};

export default LargeList;
