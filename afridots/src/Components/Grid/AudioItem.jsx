import React from "react";
import SoundComp from "../SoundComp";
const Song1 = "/assets/audio/Vid.mp3";
import { useNavigate } from "react-router-dom";

const AudioItem = ({ data, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/audio-item/${id}`, {state: {item: data, parentType : "audio"}})}
      className="p-8 border border-[#B3BBB5] shadow-sm rounded-lg hover:shadow-md transition flex "
    >
      <div onClick={()=> console.log(data, id)} className=" w-full cursor-pointer  ">
        <SoundComp
          audioSrc={Song1}
          title={data.title}
          description_audio={data.description}
          description=""
          waveColor="#ffffff"
          progressColor="#f59e0b"
          buttonColor="#e11d48"
          display="block"
        />

      </div>

    </div>
  );
};

export default AudioItem;
