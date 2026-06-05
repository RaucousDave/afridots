import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import { Play, Pause } from "lucide-react";

const SoundComp = ({
  audioSrc,
  title = "Africa (Amazing Africa)",
  description = "No description available.",
  description_audio = " ",
  waveColor = "#ffffff",
  progressColor = "#f59e0b",
  buttonColor = "#e11d48", // default red,
  price = "15,000",
  display = "none",
}) => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!audioSrc) return;

    const ws = WaveSurfer.create({
      container: waveformRef.current,
      waveColor,
      progressColor,
      height: 50,
      responsive: true,
      cursorWidth: 1,
      barWidth: 2,
      barRadius: 2,
    });

    ws.load(audioSrc);
    wavesurfer.current = ws;

    ws.on("play", () => setIsPlaying(true));
    ws.on("pause", () => setIsPlaying(false));

    return () => ws.destroy();
  }, [audioSrc, waveColor, progressColor]);

  const togglePlay = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
    }
  };

  return (
    <div className=" items-center gap-4">
      <div className="flex w-full gap-4">
        {/* Play / Pause Button */}
        <div
          className=" h-fit"
          onClick={(e) => {
            e.stopPropagation();
            console.log("add to cart");
          }}
        >
          <button
            onClick={togglePlay}
            style={{ backgroundColor: buttonColor }}
            className="w-6 h-6 p-1 mt-5 cursor-pointer rounded-full text-white shadow-lg hover:opacity-90 transition"
          >
            {isPlaying ? <Pause size={15} /> : <Play size={15} />}
          </button>
        </div>

        {/* Waveform + Text */}
        <div className="w-full flex flex-col">
          <div className="h-[64px] flex items-center w-full bg-[#5A6C5E] rounded-xl px-3">
            <div
              onClick={(e) => {
                e.stopPropagation();
                console.log("add to cart");
              }}
              ref={waveformRef}
              className="w-full"
            ></div>
          </div>

          <div className="bg-transparent">
            <h2 className="text-[20px] font-bold my-3">{title}</h2>
            <p className="text-gray-300">{description}</p>
            <p className="text-black">{description_audio}</p>
            <p className="text-[#E3A107]">NGN {price}</p>
          </div>
          <div className="text-right " style={{ display: display }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                console.log("add to cart");
              }}
              className="border-2 border-[#E3A107] rounded-full px-6 py-1"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SoundComp;
