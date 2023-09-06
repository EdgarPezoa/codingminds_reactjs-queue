const IconInfo = (svgElement: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgElement}
    >
      <path
        d="M16 2.66666C13.3629 2.66666 10.7851 3.44865 8.5924 4.91374C6.39974 6.37882 4.69078 8.4612 3.68161 10.8976C2.67244 13.3339 2.4084 16.0148 2.92287 18.6012C3.43734 21.1876 4.70721 23.5634 6.57191 25.4281C8.43661 27.2928 10.8124 28.5627 13.3988 29.0771C15.9852 29.5916 18.6661 29.3276 21.1025 28.3184C23.5388 27.3092 25.6212 25.6003 27.0863 23.4076C28.5513 21.2149 29.3333 18.6371 29.3333 16C29.3333 14.249 28.9885 12.5152 28.3184 10.8976C27.6483 9.27988 26.6662 7.81002 25.4281 6.57191C24.19 5.33379 22.7201 4.35167 21.1025 3.6816C19.4848 3.01154 17.751 2.66666 16 2.66666ZM15.3333 6.66666C15.7289 6.66666 16.1156 6.78396 16.4445 7.00372C16.7734 7.22349 17.0297 7.53584 17.1811 7.9013C17.3325 8.26675 17.3721 8.66888 17.2949 9.05684C17.2177 9.44481 17.0273 9.80117 16.7476 10.0809C16.4678 10.3606 16.1115 10.5511 15.7235 10.6282C15.3356 10.7054 14.9334 10.6658 14.568 10.5144C14.2025 10.363 13.8902 10.1067 13.6704 9.7778C13.4506 9.44891 13.3333 9.06223 13.3333 8.66666C13.3333 8.13623 13.5441 7.62752 13.9191 7.25245C14.2942 6.87738 14.8029 6.66666 15.3333 6.66666ZM18.6667 24H17.3333C16.6261 24 15.9478 23.719 15.4477 23.2189C14.9476 22.7189 14.6667 22.0406 14.6667 21.3333V16C14.313 16 13.9739 15.8595 13.7239 15.6095C13.4738 15.3594 13.3333 15.0203 13.3333 14.6667C13.3333 14.313 13.4738 13.9739 13.7239 13.7239C13.9739 13.4738 14.313 13.3333 14.6667 13.3333H16C16.3536 13.3333 16.6928 13.4738 16.9428 13.7239C17.1929 13.9739 17.3333 14.313 17.3333 14.6667V21.3333H18.6667C19.0203 21.3333 19.3594 21.4738 19.6095 21.7239C19.8595 21.9739 20 22.313 20 22.6667C20 23.0203 19.8595 23.3594 19.6095 23.6095C19.3594 23.8595 19.0203 24 18.6667 24Z"
        fill={svgElement.color}
      />
    </svg>
  );
};

export default IconInfo;
