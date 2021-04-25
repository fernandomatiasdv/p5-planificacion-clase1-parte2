const colorStatus = (status) => {
  switch (status) {
    case "Alive":
      return "#58EFEC";
    case "Dead":
      return "#E85C90";
    default:
      return "#A0A6BE";
  }
};

const avatar = (status, image) => {
  return {
    height: "90px",
    width: "90px",
    position: "relative",
    top: "-60px",
    left: 0,
    display: "flex",
    alignSelf: "center",
    border: `10px solid ${colorStatus(status)}`,
    borderRadius: "50%",
    backgroundImage: `url("${image}")`,
    backgroundSize: "contain",
    backgroundPosition: "center",
  };
};

export default avatar;
