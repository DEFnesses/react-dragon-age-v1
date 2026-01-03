import React from "react";

interface CharacterProps {
  bio?: string;
}

const Description = ({ bio }: CharacterProps) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="text-2xl p-2">Описание</h2>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default Description;
