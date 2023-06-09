import PropTypes from 'prop-types';

function VirtualizedList({ items, itemHeight, containerHeight }) {
    const startIndex = Math.floor(window.scrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight),
      items.length
    );
    const visibleItems = items.slice(startIndex, endIndex);
console.log(window.scrollTop)
    return (
      <div style={{ height: `${items.length * itemHeight}px` }}>
        <div
          style={{
            position: "relative",
            height: `${visibleItems.length * itemHeight}px`,
            top: `${startIndex * itemHeight}px`,
          }}
        >
          {visibleItems.map((item) => (
            <div key={item.id} style={{ height: `${itemHeight}px` }}>
              {item.content}
            </div>
          ))}
        </div>
      </div>
    );
  }

  VirtualizedList.propTypes = {
    items: PropTypes.array,
    itemHeight: PropTypes.number,
    containerHeight: PropTypes.number,
  }

export default VirtualizedList;