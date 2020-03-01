function MailSvg(props) {
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
      <title>email</title>
      <path d="M16.015 18.861l-4.072-3.343-8.862 10.463h25.876l-8.863-10.567-4.079 3.447zM29.926 6.019h-27.815l13.908 11.698 13.907-11.698zM20.705 14.887l9.291 11.084v-18.952l-9.291 7.868zM2.004 7.019v18.952l9.291-11.084-9.291-7.868z"></path>
    </svg>
  );
}

export default MailSvg;
