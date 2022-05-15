const Heart = ({ ...props }) => {
  return (
    <svg width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      { ...props }
    >
      <path
        d="M25.2204 6.77301C24.6585 6.21091 23.9914 5.76502 23.2573 5.4608C22.523 5.15658 21.7361 5 20.9414 5C20.1466 5 19.3597 5.15658 18.6254 5.4608C17.8913 5.76502 17.2242 6.21091 16.6624 6.77301L15.4964 7.93901L14.3304 6.77301C13.1955 5.63815 11.6563 5.00059 10.0514 5.00059C8.44641 5.00059 6.90722 5.63815 5.77236 6.77301C4.63749 7.90787 3.99994 9.44707 3.99994 11.052C3.99994 12.6569 4.63749 14.1961 5.77236 15.331L6.93836 16.497L15.4964 25.055L24.0544 16.497L25.2204 15.331C25.7825 14.7692 26.2283 14.1021 26.5325 13.3679C26.8368 12.6337 26.9933 11.8467 26.9933 11.052C26.9933 10.2573 26.8368 9.47032 26.5325 8.73611C26.2283 8.00192 25.7825 7.33484 25.2204 6.77301Z"
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Heart