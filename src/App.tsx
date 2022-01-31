import React from 'react';
import './App.scss';
import { FixedSizeList as List } from "react-window";
import Person from "./Components/Person/Person";


function App() {

    var data = require('./JSON/generated.json');

    const Row = ({index,style}:{index:number,style:any}) => (
        <div style={style} className="dynamic-windowed-person">
            <Person key={`person-${data[index]._id}`}
                    name={data[index].name}
                    about={data[index].about}
                    address={data[index].address}
                    age={data[index].age}
                    email={data[index].email}
                    id={data[index]._id}
                    isActive={data[index].isActive}
                    picture={data[index].picture}
                    registered={data[index].registered}/>
        </div>
    )

  return (
    <div className="App">
        <h1>FatCats React Task</h1>
        <div id="list-container">
            <List
                width={window.innerWidth}
                height={window.innerHeight-80}
                itemCount={data.length}
                itemSize={900}>
                {Row}
            </List>
        </div>
    </div>
  );
}

export default App;
