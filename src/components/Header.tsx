import logo from "../assets/img/icons/logo.svg";

function Header() {
  return (
    <header className="flex justify-between items-center p-[45px]">
      <div className="flex">
        <img src={logo} alt="logo" />
        <div>
          <h3 className="uppercase text-[24px] font-bold">
            Dragon Age party maker
          </h3>
          <p className="opacity-50 text-[18px]">Подбери идеальную команду</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
