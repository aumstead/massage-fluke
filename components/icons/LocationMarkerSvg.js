const LocationMarkerSvg = props => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || "32"}
      height={props.height || "32"}
      fill={props.fill || "#000"}
      opacity={props.opacity || "1"}
      viewBox="0 0 32 32"
    >
      <title>location</title>
      <path d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"></path>
    </svg>
  );
};

export default LocationMarkerSvg;
