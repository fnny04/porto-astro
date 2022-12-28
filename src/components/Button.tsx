export default function Button(props: { text?: string; color?: string }) {
  const { text, color = "pink-300" } = props;
  return (
    <button
      className={`p-3 rounded-md bg-pink-300 text-black dark:font-bold dark:text-white`}
    >
      {text}
    </button>
  );
}
