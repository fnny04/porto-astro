export default function BodyText(props: {
  text: string;
  color?: string;
  size?: string;
}) {
  const { text, color = "black", size } = props;
  return (
    <>
      <p className={`text-${color} p-${size} text-xl `}>{text}</p>
    </>
  );
}
