const styles = {
    NavLink: {
        textDecoration: "none",
        fontSize: '1.8rem',
        '@media (max-width: 780px)' : {
          fontSize: '1.4rem',
        }
      },
      active: {
        color: "red",
        "&::before": {
          content: `''`,
          position: "absolute",
          display: "block",
          left: "0",
          top: "35%",
          width: "0",
          height: "0",
          border: "10px solid",
          borderColor: "transparent transparent transparent red",
        },
      },
}
export default styles;