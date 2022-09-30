import "./App.css";

import { useState } from "react";

// components
import AttributeSelector from "./components/AttributeSelector";
import GameSkill from "./components/GameSkill";

// attributes
import AntennaAttributes from "./attributes/AntennaAttributes.json";
import HeadAttributes from "./attributes/HeadAttributes.json";
import FaceAttributes from "./attributes/FaceAttributes.json";
import ChestAttributes from "./attributes/ChestAttributes.json";
import HandsAttributes from "./attributes/HandsAttributes.json";

function App() {
  const [antenna, setAntenna] = useState(0);
  const [head, setHead] = useState(0);
  const [face, setFace] = useState(0);
  const [chest, setChest] = useState(0);
  const [hands, setHands] = useState(0);

  return (
    <div className='App'>
      <div className='container'>
        <h1>Battle Leets Skill Loadout</h1>
        <div className='row'>
          <div className='col'>
            <AttributeSelector
              heading={"Antenna"}
              attribute={antenna}
              setAttribute={setAntenna}
              attributeTypes={AntennaAttributes}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <AttributeSelector
              heading={"Head"}
              attribute={head}
              setAttribute={setHead}
              attributeTypes={HeadAttributes}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <AttributeSelector
              heading={"Face"}
              attribute={face}
              setAttribute={setFace}
              attributeTypes={FaceAttributes}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <AttributeSelector
              heading={"Chest"}
              attribute={chest}
              setAttribute={setChest}
              attributeTypes={ChestAttributes}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <AttributeSelector
              heading={"Hands"}
              attribute={hands}
              setAttribute={setHands}
              attributeTypes={HandsAttributes}
            />
          </div>
        </div>
        <hr className='border border-dark border-3 opacity-100'></hr>
        <div className='row'>
          <div className='col'>
            <GameSkill
              action={"Right Click"}
              gameSkill={antenna}
              skillList={AntennaAttributes}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <GameSkill
              action={"'W' Key"}
              gameSkill={head}
              skillList={HeadAttributes}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <GameSkill
              action={"'E' Key"}
              gameSkill={face}
              skillList={FaceAttributes}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <GameSkill
              action={"'R' Key"}
              gameSkill={chest}
              skillList={ChestAttributes}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <GameSkill
              action={"Left Click"}
              gameSkill={hands}
              skillList={HandsAttributes}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
