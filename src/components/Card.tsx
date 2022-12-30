import { FaGithub } from "react-icons/fa";

export default function Card(props: { text?: string }) {
  const { text } = props;
  return (
    <>
      <a href="https://github.com/fnny04?tab=repositories">
        <div className="flex flex-col p-4 m-4 bg-gray-100 border-md rounded-md items-center ">
          <h1>{text}</h1>
          <FaGithub className="text-4xl m-2" />
        </div>
      </a>
    </>
  );
}
