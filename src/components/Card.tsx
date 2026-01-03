import React from "react";

import checkIcon from "../assets/img/icons/check.svg";

interface CharacterProps {
  name: string;
  imageUrl: string;
  job: string;
  spec: string;
  race: string;
  bio: string;
}


function Card({ name, imageUrl, job, spec, race, bio }: CharacterProps) {
  return (
    <div className="card">
      <div className="pt-[10px] iconBlock ">
        <img src={job} />
        <img src={spec} />
        <img src={race} />
      </div>
      <div className="flex flex-col items-center">
        <img src={imageUrl} alt="p1" />
        <h5>{name}</h5>
      </div>
      <div>
        <img
          className="ml-[-1px] mt-[-15px] delay-50 duration-500 ease-in-out hover:-translate-y-[5px] "
          src={checkIcon}
          alt="checkIcon"
        />
      </div>
    </div>
  );
}

export default Card;
