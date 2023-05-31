import "./index.css";

const Button = ({ size, use, color, children, ...buttonProps }) => {
  const classes = [
    "button",
    use === "text" ? "button--text" : "button--button",
    color === "secondary" ? "button--secondary" : "button--primary",
    size === "small"
      ? "button--small"
      : size === "large"
      ? "button--large"
      : "button--medium",
  ];

  return (
    <a className={classes.join(" ")} {...buttonProps}>
      {children}
    </a>
  );
};

export default Button;
