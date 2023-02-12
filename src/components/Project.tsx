import project from "../assets/Apotekqyu.png";
import gallery from "../assets/gallery.png";
import market from "../assets/VegetaMart.png";
import web from "../assets/Webapp.png";
import votsu from "../assets/votsu.png";

export default function Project() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  gap-4 p-4">
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
      <div className="p-4 bg-white rounded-md">
        <a href="https://vegetamart.netlify.app/">
          <img src={market} alt="" />
          <h1 className="ml-14 m-4 text-gray-600">
            https://vegetamart.netlify.app/
          </h1>
        </a>
        <a href="https://github.com/fnny04/shopping-react">
          <h1 className="ml-14 my-4 text-gray-600">
            https://github.com/fnny04/shopping-react
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
      <div className="p-2 bg-white rounded-md">
        <a href="https://gallery-app-rg.netlify.app/">
          <img src={gallery} alt="" />
          <h1 className="ml-14 text-gray-600">
            https://gallery-app-rg.netlify.app/
          </h1>
        </a>
      </div>
      <div className="p-4 bg-white rounded-md">
        <a href="https://votsu.netlify.app/">
          <img src={votsu} alt="" />
        </a>
        <a href="https://votsu.netlify.app//">
          <h1 className="ml-14 my-4 text-gray-600">
            https://votsu.netlify.app/
          </h1>
        </a>
        <a href="https://github.com/psudevteam/votsu-fe">
          <h1 className="ml-14 my-4 text-gray-600">
            https://github.com/psudevteam/votsu-fe
          </h1>
        </a>
      </div>
    </div>
  );
}
