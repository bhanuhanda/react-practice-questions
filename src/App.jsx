import './App.css'
import VirtualizedList from './components/Vir';
// import Carousel from './components/Carousel'
// import Virtualisation from './components/Virtualisation'
import { useState } from 'react'

const data = [
  { name: 'row 1' },
  { name: 'row 2' },
  { name: 'row 3' },
  { name: 'row 4' },
  { name: 'row 5' },
  { name: 'row 6' },
  { name: 'row 7' },
  { name: 'row 8' },
  { name: 'row 9' },
  { name: 'row 10' },
  { name: 'row 11' },
  { name: 'row 12' },
  { name: 'row 13' },
  { name: 'row 14' },
  { name: 'row 15' },
  { name: 'row 16' },
  { name: 'row 17' },
  { name: 'row 18' },
  { name: 'row 19' },
  { name: 'row 20' },
  { name: 'row 21' },
  { name: 'row 22' },
  { name: 'row 23' },
  { name: 'row 24' },
  { name: 'row 25' },
  { name: 'row 26' },
  { name: 'row 27' },
  { name: 'row 28' },
  { name: 'row 29' },
  { name: 'row 30' },
  { name: 'row 31' },
  { name: 'row 32' },
  { name: 'row 33' },
  { name: 'row 34' },
  { name: 'row 35' },
  { name: 'row 36' },
  { name: 'row 37' },
  { name: 'row 38' },
  { name: 'row 39' },
  { name: 'row 40' },
  { name: 'row 41' },
  { name: 'row 42' },
  { name: 'row 43' },
  { name: 'row 44' },
  { name: 'row 45' },
  { name: 'row 46' },
  { name: 'row 47' },
  { name: 'row 48' },
  { name: 'row 49' },
  { name: 'row 50' },
  { name: 'row 51' },
  { name: 'row 52' },
  { name: 'row 53' },
  { name: 'row 54' },
  { name: 'row 55' },
  { name: 'row 56' },
  { name: 'row 57' },
  { name: 'row 58' },
  { name: 'row 59' },
  { name: 'row 60' },
];

function App() {
    const [items, setItems] = useState([...data]);

        // <Carousel />
    // <Virtualisation />

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Virtualized List from Scratch</p>
      <VirtualizedList
        numItems={items.length}
        itemHeight={25}
        windowHeight={200}
        renderItem={({ index }) => {
          const i = items[index];
          return (
            <div key={i.name} className="item">
              <span>{i.name}</span>
            </div>
          );
        }}
      />
    </div>
  );
}

export default App
