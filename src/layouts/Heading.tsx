export default function Heading(props: {
  text: string;
  color?: string;
  size?: string;
  fontSize?: string;
}) {
  const { text, color = "black", size, fontSize = "4xl" } = props;
  return (
    <>
      <h1 className={`text-pink-400 text-6xl font-bold p-${size}`}>{text}</h1>
    </>
  );
}
