import React, { useState, useEffect } from "react";
import "./App.css";
import {
  dollarCoin,
  mainCharacter,
  vhr,
  fb,
  tick,
  yt,
  x,
  homesCoin,
  vhrlogo,
} from "./images";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true); // Preloader state
  const [world, setWorld] = useState(0);
  const [selectedWorld, setselectWorld] = useState(0);

  // const [levelIndex, setLevelIndex] = useState(6);
  const [points, setPoints] = useState(0);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>(
    []
  );
  const pointsToAdd = 11;
  const profitPerHour = 126420;

  useEffect(() => {
    // Simulate a loading delay, e.g., for fetching resources
    const loadTime = setTimeout(() => setLoading(false), 2000); // Set to false after 2 seconds
    return () => clearTimeout(loadTime);
  }, []);

  useEffect(() => {
    const pointsPerSecond = Math.floor(profitPerHour / 3600);
    const interval = setInterval(() => {
      setPoints((prevPoints) => prevPoints + pointsPerSecond);
    }, 1000);
    return () => clearInterval(interval);
  }, [profitPerHour]);

  const handleWorldClick = (e: number) => {
    setWorld(e);
  };

  const handleSelectWorld = (e: number) => {
    setselectWorld(e);
  };
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${
      -y / 10
    }deg) rotateY(${x / 10}deg)`;
    setTimeout(() => {
      card.style.transform = "";
    }, 100);

    setPoints(points + pointsToAdd);
    setClicks([...clicks, { id: Date.now(), x: e.pageX, y: e.pageY }]);
  };

  const handleAnimationEnd = (id: number) => {
    setClicks((prevClicks) => prevClicks.filter((click) => click.id !== id));
  };

  // Preloader component
  if (loading) {
    return (
      <div className="screen flex justify-center items-center h-screen">
        <div className="w-full text-black font-bold flex flex-col max-w-xl">
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-center  justify-center">
              <div className="inline-block" style={{ width: "80%" }}>
                <img
                  src={homesCoin}
                  alt="vhr"
                  className="inline-block mt-6 "
                  style={{ height: "10vh" }}
                />
                <div className="relative z-10 text-white-600">
                  Virtual Homes Reality Bot
                </div>
                <img
                  src={vhr}
                  alt="vhr"
                  className="inline-block mt-8 "
                  style={{ width: "100%" }}
                />
                <i className="text-right float-end text-xs">
                  everyone deserves a Home
                </i>
              </div>
              <img
                src={mainCharacter}
                alt="Main Character"
                className="inline-block mt-10"
                style={{ width: "65%" }}
              />
            </div>
            <br />
            <div className="text-white text-center text-sm font-bold">
              Loading...
            </div>
            <div
              className="inline-block mt-10 px-10 rounded-lg text-center bg-white"
              style={{ width: "98%" }}
            >
              <img
                src={fb}
                alt="fb"
                className="inline-block m-2 "
                style={{ width: "18%" }}
              />
              <img
                src={x}
                alt="x"
                className="inline-block m-2 "
                style={{ width: "18%" }}
              />
              <img
                src={yt}
                alt="yt"
                className="inline-block m-2 "
                style={{ width: "18%" }}
              />
              <img
                src={tick}
                alt="tick"
                className="inline-block m-2 "
                style={{ width: "18%" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selectedWorld > 0) {
    return (
      <div className="screen flex justify-center">
        <div className="w-full text-white h-screen font-bold flex flex-col max-w-xl">
          <div className="z-10">
            <div
              className="text-center mb-3"
              style={{
                backgroundColor: "#e28913",
                borderTop: "3px solid #aeda1f",
                borderRadius: "0px 0px 10px 10px",
              }}
            >
              <span className="text-sm">Nikandr (CEO)</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="p-4 dbtn_gold">
                <small>Become a Citizen</small>
                <b>VHR WORLD</b>
              </div>
              <div className="p-4 dbtn_gold">
                <small>Revenue / hour</small>
                <b>50 / hr</b>
              </div>
            </div>
          </div>

          <div className="flex-grow mt-4 relative z-0">
            <div className="absolute top-[2px] left-0 right-0 bottom-0">
              <div className="px-4 mt-4 flex justify-center">
                <div className="p-4 rounded-full" onClick={handleCardClick}>
                  <div className="rounded-full">
                    <img
                      src={mainCharacter}
                      alt="Main Character"
                      className="mainCharacter"
                    />
                  </div>
                </div>
              </div>

              <div className="px-4 mt-4 flex justify-center">
                <div className="px-4 py-2 flex items-center space-x-2">
                  <img
                    src={dollarCoin}
                    alt="Dollar Coin"
                    className="w-10 h-10"
                  />
                  <p className="text-2xl text-white">
                    {points.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="p-4 dbtn">
              <b>Earn</b>
            </div>
            <div className="p-4 dbtn">
              <b>Invite</b>
            </div>
            <div className="p-4 dbtn">
              <b>Games</b>
            </div>
          </div>
        </div>

        {clicks.map((click) => (
          <div
            key={click.id}
            className="absolute text-5xl font-bold opacity-0 text-white pointer-events-none"
            style={{
              top: `${click.y - 42}px`,
              left: `${click.x - 28}px`,
              animation: `float 1s ease-out`,
            }}
            onAnimationEnd={() => handleAnimationEnd(click.id)}
          >
            {pointsToAdd}
          </div>
        ))}
      </div>
    );
  }

  if (world == 0) {
    return (
      <div className="screen flex justify-center items-center h-screen">
        <div className="w-full text-white font-bold flex flex-col max-w-xl">
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-center  justify-center">
              <div className="inline-block" style={{ width: "80%" }}>
                <div className="relative z-10 text-black text-4xl">
                  VHR WORLDS
                </div>
                <img
                  src={vhrlogo}
                  alt="vhr"
                  className="inline-block mt-8 "
                  style={{ width: "80%" }}
                />
              </div>
            </div>
            <br />
            <div className="text-black p-4 text-justify text-sm ">
              Enter the VHR Metaverse, where 6 vibrant worlds awaits you nestled
              in a unique environment, led by a dynamic chief. Join the one that
              resonates with your nature and give you your desired revenue per
              hour. From adventure to serenity, choose your perfect fit and
              become part of a thriving community, united under the visionary
              leadership of the Head of Chiefs!
            </div>

            <div className="p-4 mt-5 dbtn" onClick={() => handleWorldClick(1)}>
              <b>Choose Worlds</b>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (world == 1) {
    return (
      <div className="screen flex justify-center items-center h-screen">
        <div className="w-full text-white font-bold flex flex-col max-w-xl">
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-center  justify-center">
              <div className="inline-block" style={{ width: "80%" }}>
                <div className="relative z-10 text-black text-3xl">
                  VHR WORLDS
                </div>
                <img
                  src={vhrlogo}
                  alt="vhr"
                  className="inline-block mt-8 "
                  style={{ width: "80%" }}
                />
              </div>
            </div>
            <br />
            <div className="text-black p-4 text-justify text-xs ">
              Enter the VHR Metaverse, where 6 vibrant worlds awaits you nestled
              in a unique environment, led by a dynamic chief. Join the one that
              resonates with your nature and give you your desired revenue per
              hour. From adventure to serenity, choose your perfect fit and
              become part of a thriving community, united under the visionary
              leadership of the Head of Chiefs!
            </div>

            <div
              className="p-4 mt-5 dbtn"
              onClick={() => handleSelectWorld(world)}
            >
              <b>Select World</b>
            </div>

            <div className="grid grid-cols-3 gap-2  mt-5">
              <div
                className="p-4 dbtn_gold"
                onClick={() => handleWorldClick(world)}
              >
                <b className="px-5">Prev</b>
              </div>
              <div className="pt-3 text-black text-center">
                {world} of 6 worlds
              </div>
              <div
                className="p-4 dbtn_gold"
                onClick={() => handleWorldClick(world + 1)}
              >
                <b className="px-5">Next</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (world == 2) {
    return (
      <div className="screen flex justify-center items-center h-screen">
        <div className="w-full text-white font-bold flex flex-col max-w-xl">
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-center  justify-center">
              <div className="inline-block" style={{ width: "80%" }}>
                <div className="relative z-10 text-black text-3xl">
                  VHR WORLDS
                </div>
                <img
                  src={vhrlogo}
                  alt="vhr"
                  className="inline-block mt-8 "
                  style={{ width: "80%" }}
                />
              </div>
            </div>
            <br />
            <div className="text-black p-4 text-justify text-xs ">
              Enter the VHR Metaverse, where 6 vibrant worlds awaits you nestled
              in a unique environment, led by a dynamic chief. Join the one that
              resonates with your nature and give you your desired revenue per
              hour. From adventure to serenity, choose your perfect fit and
              become part of a thriving community, united under the visionary
              leadership of the Head of Chiefs!
            </div>

            <div
              className="p-4 mt-5 dbtn"
              onClick={() => handleSelectWorld(world)}
            >
              <b>Select World</b>
            </div>

            <div className="grid grid-cols-3 gap-2  mt-5">
              <div
                className="p-4 dbtn_gold"
                onClick={() => handleWorldClick(world - 1)}
              >
                <b className="px-5">Prev</b>
              </div>
              <div className="pt-3 text-black text-center">
                {world} of 6 worlds
              </div>
              <div
                className="p-4 dbtn_gold"
                onClick={() => handleWorldClick(world + 1)}
              >
                <b className="px-5">Next</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (world == 3) {
    return (
      <div className="screen flex justify-center items-center h-screen">
        <div className="w-full text-white font-bold flex flex-col max-w-xl">
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-center  justify-center">
              <div className="inline-block" style={{ width: "80%" }}>
                <div className="relative z-10 text-black text-3xl">
                  VHR WORLDS
                </div>
                <img
                  src={vhrlogo}
                  alt="vhr"
                  className="inline-block mt-8 "
                  style={{ width: "80%" }}
                />
              </div>
            </div>
            <br />
            <div className="text-black p-4 text-justify text-xs ">
              Enter the VHR Metaverse, where 6 vibrant worlds awaits you nestled
              in a unique environment, led by a dynamic chief. Join the one that
              resonates with your nature and give you your desired revenue per
              hour. From adventure to serenity, choose your perfect fit and
              become part of a thriving community, united under the visionary
              leadership of the Head of Chiefs!
            </div>

            <div
              className="p-4 mt-5 dbtn"
              onClick={() => handleSelectWorld(world)}
            >
              <b>Select World</b>
            </div>

            <div className="grid grid-cols-3 gap-2  mt-5">
              <div
                className="p-4 dbtn_gold"
                onClick={() => handleWorldClick(world - 1)}
              >
                <b className="px-5">Prev</b>
              </div>
              <div className="pt-3 text-black text-center">
                {world} of 6 worlds
              </div>
              <div
                className="p-4 dbtn_gold"
                onClick={() => handleWorldClick(world + 1)}
              >
                <b className="px-5">Next</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (world == 4) {
    return (
      <div className="screen flex justify-center items-center h-screen">
        <div className="w-full text-white font-bold flex flex-col max-w-xl">
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-center  justify-center">
              <div className="inline-block" style={{ width: "80%" }}>
                <div className="relative z-10 text-black text-3xl">
                  VHR WORLDS
                </div>
                <img
                  src={vhrlogo}
                  alt="vhr"
                  className="inline-block mt-8 "
                  style={{ width: "80%" }}
                />
              </div>
            </div>
            <br />
            <div className="text-black p-4 text-justify text-xs ">
              Enter the VHR Metaverse, where 6 vibrant worlds awaits you nestled
              in a unique environment, led by a dynamic chief. Join the one that
              resonates with your nature and give you your desired revenue per
              hour. From adventure to serenity, choose your perfect fit and
              become part of a thriving community, united under the visionary
              leadership of the Head of Chiefs!
            </div>

            <div
              className="p-4 mt-5 dbtn"
              onClick={() => handleSelectWorld(world)}
            >
              <b>Select World</b>
            </div>

            <div className="grid grid-cols-3 gap-2  mt-5">
              <div
                className="p-4 dbtn_gold"
                onClick={() => handleWorldClick(world - 1)}
              >
                <b className="px-5">Prev</b>
              </div>
              <div className="pt-3 text-black text-center">
                {world} of 6 worlds
              </div>
              <div
                className="p-4 dbtn_gold"
                onClick={() => handleWorldClick(world + 1)}
              >
                <b className="px-5">Next</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (world == 5) {
    return (
      <div className="screen flex justify-center items-center h-screen">
        <div className="w-full text-white font-bold flex flex-col max-w-xl">
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-center  justify-center">
              <div className="inline-block" style={{ width: "80%" }}>
                <div className="relative z-10 text-black text-3xl">
                  VHR WORLDS
                </div>
                <img
                  src={vhrlogo}
                  alt="vhr"
                  className="inline-block mt-8 "
                  style={{ width: "80%" }}
                />
              </div>
            </div>
            <br />
            <div className="text-black p-4 text-justify text-xs ">
              Enter the VHR Metaverse, where 6 vibrant worlds awaits you nestled
              in a unique environment, led by a dynamic chief. Join the one that
              resonates with your nature and give you your desired revenue per
              hour. From adventure to serenity, choose your perfect fit and
              become part of a thriving community, united under the visionary
              leadership of the Head of Chiefs!
            </div>

            <div
              className="p-4 mt-5 dbtn"
              onClick={() => handleSelectWorld(world)}
            >
              <b>Select World</b>
            </div>

            <div className="grid grid-cols-3 gap-2  mt-5">
              <div
                className="p-4 dbtn_gold"
                onClick={() => handleWorldClick(world - 1)}
              >
                <b className="px-5">Prev</b>
              </div>
              <div className="pt-3 text-black text-center">
                {world} of 6 worlds
              </div>
              <div
                className="p-4 dbtn_gold"
                onClick={() => handleWorldClick(world + 1)}
              >
                <b className="px-5">Next</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (world == 6) {
    return (
      <div className="screen flex justify-center items-center h-screen">
        <div className="w-full text-white font-bold flex flex-col max-w-xl">
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-center  justify-center">
              <div className="inline-block" style={{ width: "80%" }}>
                <div className="relative z-10 text-black text-3xl">
                  VHR WORLDS
                </div>
                <img
                  src={vhrlogo}
                  alt="vhr"
                  className="inline-block mt-8 "
                  style={{ width: "80%" }}
                />
              </div>
            </div>
            <br />
            <div className="text-black p-4 text-justify text-xs ">
              Enter the VHR Metaverse, where 6 vibrant worlds awaits you nestled
              in a unique environment, led by a dynamic chief. Join the one that
              resonates with your nature and give you your desired revenue per
              hour. From adventure to serenity, choose your perfect fit and
              become part of a thriving community, united under the visionary
              leadership of the Head of Chiefs!
            </div>

            <div
              className="p-4 mt-5 dbtn"
              onClick={() => handleSelectWorld(world)}
            >
              <b>Select World</b>
            </div>

            <div className="grid grid-cols-3 gap-2  mt-5">
              <div
                className="p-4 dbtn_gold"
                onClick={() => handleWorldClick(world - 1)}
              >
                <b className="px-5">Prev</b>
              </div>
              <div className="pt-3 text-black text-center">
                {world} of 6 worlds
              </div>
              <div
                className="p-4 dbtn_gold"
                onClick={() => handleWorldClick(6)}
              >
                <b className="px-5">Next</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
