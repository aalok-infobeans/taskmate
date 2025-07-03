import { useContext } from "react";
import MyContext from "../MyContext";

const DistrictGov = ({ money }) => {
  const contextValue = useContext(MyContext);

  return (
    <>
      <h4>I am in district government and it context value ={contextValue}</h4>
      <h4>I am in district government and it props value ={money}</h4>
    </>
  );
};

export default DistrictGov;
