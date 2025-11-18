import "./App.css";
import logo from "../src/assets/img/icons/logo.svg";
import warriorIcon from "../src/assets/img/icons/warrior/warrior.svg";
import warriorSpIcon from "../src/assets/img/icons/warrior/warrior-sp1.svg";
import hmIcon from "../src/assets/img/icons/race/hm.svg";
import p1 from "../src/assets/img/portraits/1.jpg";
import checkIcon from "../src/assets/img/icons/check.svg";


function App() {
  return (
    <div className="wrapper">
      <header className="flex justify-between items-center pl-5">
        <div className="flex">
          <img className="mr-[15px]" src={logo} alt="logo"/>
          <div>
            <h3 className="uppercase">Dragon Age party maker</h3>
            <p className="opacity-50">Подбери идеальную команду</p>
          </div>
        </div>
      </header>
<h2 className="text-3xl font-bold underline">
      Hello world!
    </h2>
      <div>
        <div>
          <h1>Все персонажи</h1>
          <input placeholder="Поиск..."></input>
        </div>

        <div>
          <div>
            <div>
              <img src={warriorIcon} alt="warriorIcon" />
              <img src={warriorSpIcon} alt="warriorSpIcon" />
              <img src={hmIcon} alt="hmIcon" />
            </div>

            <img src={p1} alt="p1" />
            <h5>Блэкволл</h5>

            <div>
              <img src={checkIcon} alt="checkIcon" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
