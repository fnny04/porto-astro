import project from "../assets/Apotekqyu.png";
import gallery from "../assets/gallery.png";
import web from "../assets/Webapp.png";

export default function Project() {
  return (
    <div className="grid grid-rows-1 md:grid-cols-3  gap-4 p-4">
      <div className="p-4 bg-white rounded-md">
        <a href="https://apotekqyu.netlify.app/">
          <img src={project} alt="" />
        </a>
        <a href="https://apotekqyu.netlify.app/">
          <h1 className="ml-14 my-4 text-gray-600">
            https://apotekqyu.netlify.app/
          </h1>
        </a>
        <a href="https://github.com/fnny04/apotek-qyu">
          <h1 className="ml-14 my-4 text-gray-600">
            https://github.com/fnny04/apotek-qyu
          </h1>
        </a>
      </div>
      <div className="p-2 bg-white rounded-md">
        <a href="https://gallery-app-rg.netlify.app/">
          <img src={gallery} alt="" />
          <h1 className="ml-14 text-gray-600">
            https://gallery-app-rg.netlify.app/
          </h1>
        </a>
      </div>
      <div className="p-4 bg-white rounded-md">
        <a href="https://simple-funny-webapp.netlify.app/">
          <img src={web} alt="" />
        </a>
        <a href="https://simple-funny-webapp.netlify.app//">
          <h1 className="ml-14 my-4 text-gray-600">
            https://simple-funny-webapp.netlify.app/
          </h1>
        </a>
        <a href="https://github.com/fnny04/Simply-Webapp-Funny">
          <h1 className="ml-14 my-4 text-gray-600">
            https://github.com/fnny04/Simply-Webapp-Funny
          </h1>
        </a>
      </div>
    </div>
  );
}
