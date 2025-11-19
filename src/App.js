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
      <header className="flex justify-between items-center pl-[45px] pb-[45px]">
        <div className="flex">
          <img src={logo} alt="logo" />
          <div>
            <h3 className="uppercase text-[20px] font-bold">
              Dragon Age party maker
            </h3>
            <p className="opacity-50">Подбери идеальную команду</p>
          </div>
        </div>
      </header>

      <div className="pl-[45px] pr-[45px]">
        <div className="flex justify-between items-center mb-[40px]">
          <h1 className="text-[32px] font-bold">Все персонажи</h1>
          <input className="search" placeholder="Поиск..."></input>
        </div>

        <div className="flex ">
          <div className="flex">
            <div>
              <img src={warriorIcon} alt="warriorIcon" />
              <img src={warriorSpIcon} alt="warriorSpIcon" />
              <img src={hmIcon} alt="hmIcon" />
            </div>
            <div className="flex flex-col items-center">
              <img src={p1} alt="p1" />
              <h5>Блэкволл</h5>
            </div>

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
