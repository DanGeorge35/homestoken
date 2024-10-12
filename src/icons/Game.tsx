import { IconProps } from "../utils/types";

const Game: React.FC<IconProps> = ({ size = 24, className = "" }) => {
  const svgSize = `${size}px`;

  return (
    <svg
      viewBox="0 0 28 28"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
      height={svgSize}
      width={svgSize}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g
          id="🔍-Product-Icons"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            id="ic_fluent_game_controller_28_filled"
            fill="currentColor"
            fill-rule="nonzero"
          >
            <path
              d="M14 2C9.30558 2 5.5 5.80558 5.5 10.5V16.5C5.5 21.1944 9.30558 25 14 25C18.6944 25 22.5 21.1944 22.5 16.5V10.5C22.5 5.80558 18.6944 2 14 2ZM11 8C11.5523 8 12 8.44772 12 9V11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H12V15C12 15.5523 11.5523 16 11 16C10.4477 16 10 15.5523 10 15V13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H10V9C10 8.44772 10.4477 8 11 8ZM18.5 13.5C18.7761 13.5 19 13.7239 19 14C19 14.2761 18.7761 14.5 18.5 14.5H17.5C17.2239 14.5 17 14.2761 17 14C17 13.7239 17.2239 13.5 17.5 13.5H18.5ZM19.5 11.5C19.7761 11.5 20 11.7239 20 12C20 12.2761 19.7761 12.5 19.5 12.5H18.5C18.2239 12.5 18 12.2761 18 12C18 11.7239 18.2239 11.5 18.5 11.5H19.5Z"
              id="🎨-Color"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Game;
