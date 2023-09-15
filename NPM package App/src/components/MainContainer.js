import  { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../utills";
import ListContainer from "./ListContainer";

const MainContainer = () => {
  const [moduleName, setModuleName] = useState([]);

  return (
    <div className="w-screen h-auto mx-5 flex flex-col items-start justify-start">
      {moduleName.length === 0 ? (
        <>
          <div className="w-screen h-20vh mt-10 mx-10 flex flex-col items-start justify-start">
            <h1 className="text-3xl text-gray-700 font-semibold flex items-start justify-start tracking-wide">
              Welcome to Favorite NPM Packages
            </h1>
          </div>
          <div className="h-40vh w-90vw flex flex-col items-center justify-center border-2 border-solid border-gray-400 rounded-none px-10 p-10 mx-10">
            <div>
              <p className="p-1 tracking-wide text-gray-700 font-semibold">
                You do not have any favs yet. Please add
              </p>
            </div>
            <Link to={"/addFavs"}>
              <Button name="Add Fav" />
            </Link>
          </div>
        </>
      ) : (
        <ListContainer />
      )}
  
    </div>
  );
};

export default MainContainer;
