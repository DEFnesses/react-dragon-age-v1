import React from "react";

import Header from "./components/Header";
import Calc from "./components/Calc";
import Card from "./components/Card";
import Description from "./components/Description";
import characters from "./assets/characters.json";
import "./App.css";

import searchIcon from "./assets/img/icons/search.svg";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="pl-[45px] pr-[45px]">
        <div className="flex justify-between items-center mb-[40px]">
          <h1 className="text-[36px] font-bold">Все персонажи</h1>
          <div className="search flex p-[10px] mt-[10px]">
            <img className="mr-[35px]" src={searchIcon} alt="searchIcon" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="content flex flex-wrap">

    {/* <Description bio={characters[0].bio} /> */}

          {/* {characters.map((obj, index) => (
            <Card
              key={index}
              name={obj.name}
              imageUrl={obj.imageUrl}
              job={obj.job}
              spec={obj.spec}
              race={obj.race}
              bio={obj.bio || ""}
            />
          ))} */}

            <Calc />

        </div>
      </div>
    </div>
  );
}

export default App;
