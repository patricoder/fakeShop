import "./Button.scss";
type TButton = {
  text: string;
  style: string;
  fun: any;
};

const Button: React.FC<TButton> = ({ text, style, fun }) => {
  //style = "primary" || "secondary"
  return (
    <div className={"button " + style} onClick={fun}>
      {text}
    </div>
  );
};

export default Button;
