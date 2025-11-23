import React from "react";

import checkIcon from "../assets/img/icons/check.svg";

function Card({ name, imageUrl, job, spec, race, bio }) {
  return (
    <div className="card">
      <div className="pt-[10px] iconBlock">
        <img src={job} />
        <img src={spec} />
        <img src={race} />
      </div>
      <div className="flex flex-col items-center">
        <img onClick={() => alert(bio)} src={imageUrl} alt="p1" />
        <h5>{name}</h5>
      </div>
      <div>
        <img className="ml-[-1px] mt-[-15px]" src={checkIcon} alt="checkIcon" />
      </div>
    </div>
  );
}

export default Card;
