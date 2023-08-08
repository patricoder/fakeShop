import "./Button.scss";
type TButton = {
  text: string;
  style: string;
  onClick: () => any;
};

const Button: React.FC<TButton> = ({ text, style }) => {
  //style = "primary" || "secondary"
  return <div className={"button " + style}>{text}</div>;
};

export default Button;
