const IconPlate = (svgElement: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgElement}
    >
      <g clipPath="url(#clip0_13_242)">
        <path
          d="M15 8H17C17.6 8 18 7.6 18 7C18 6.4 17.6 6 17 6H15C14.4 6 14 6.4 14 7C14 7.6 14.4 8 15 8Z"
          fill={svgElement.color}
        />
        <path
          d="M29.9 20.5C29.7 20.2 29.3 20 29 20H27.9C27.4 15.6 23.8 11.2 19.2 9.8C17.1 9.1 14.8 9.1 12.7 9.8C8.2 11.2 4.5 15.6 4.1 20H3C2.7 20 2.3 20.2 2.1 20.5C1.9 20.8 1.9 21.2 2.1 21.5C3.5 24.3 6.3 26 9.5 26H22.6C25.7 26 28.6 24.3 30 21.4C30 21.1 30 20.8 29.9 20.5ZM13.3 11.7C15 11.2 16.9 11.2 18.6 11.7C22.3 12.8 25.4 16.4 25.9 20H6.1C6.6 16.4 9.6 12.9 13.3 11.7ZM22.5 24H9.5C7.7 24 6.1 23.3 4.9 22H27.1C25.9 23.3 24.3 24 22.5 24Z"
          fill={svgElement.color}
        />
      </g>
      <defs>
        <clipPath id="clip0_13_242">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default IconPlate;
