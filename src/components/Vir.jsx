import React, { useState } from 'react';

const VirtualizedList = (props) => {
  const { numItems, itemHeight, renderItem, windowHeight } = props;
  const [scrollTop, setScrollTop] = useState(0);

  // const innerHeight = numItems * itemHeight;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    numItems - 1, // don't render past the end of the list
    Math.ceil((scrollTop + windowHeight) / itemHeight)
  );
  const items = [];
  for (let i = startIndex; i <= endIndex; i++) {
    items.push(
      renderItem({
        index: i,
        style: {
          position: 'absolute',
          top: `${i * itemHeight}px`,
          width: '100%',
          background: i & 1 ? '#ccc' : 'lightblue',
        },
      })
    );
  }

  const onScroll = (e) => setScrollTop(e.currentTarget.scrollTop);

  return (
    <div
      className="inner"
      style={{
        position: 'relative',
        height: `${windowHeight}px`,
        overflowY: 'scroll',
      }}
      onScroll={onScroll}
    >
      {items}
    </div>
  );
};

export default VirtualizedList;