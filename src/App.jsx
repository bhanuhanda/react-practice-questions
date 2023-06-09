import './App.css'
import LargeList from './components/LargeList'
// import VirtualizedList from './components/Vir2'
// import Carousel from './components/Carousel'
// import Virtualisation from './components/Virtualisation'

function App() {
  // const items = new Array(100).fill(0).map((val, idx) => ({
  //   id: idx+1,
  //   content: `Item ${idx+1}`
  // }))

  // console.log({ items })
  return (
    // <Carousel />
    // <Virtualisation />
    // <VirtualizedList items={items} itemHeight={15} containerHeight={100} />
    <LargeList />
  )
}

export default App
