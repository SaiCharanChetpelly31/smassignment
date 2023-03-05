interface IconProps {
  url: string;
}
const Icon = (props: IconProps) => {
  return (
    <div>
      <img src={`../Images/${props.url}.png`} width="50px" height="50px" />
    </div>
  );
};

export default Icon;
