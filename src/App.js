//import BuildingData from "./components/BuildingData";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TableHeader from "./components/TableHeader";
//import {building, cellTower} from './data';



export default function App() {
  // const buildingsData = building.map(item => {
  //   return (
  //     <BuildingData key={item.id} {...item}/>
  //   )
  // })
  return (
    <div className="App">
      <Header />
      <SearchBar />
    </div>
  );
};
