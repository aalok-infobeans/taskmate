import DistrictGov from "./DistrictGov";

const StateGov = ({ money }) => {
  return (
    <>
      <h1>I am in state government</h1>
      <DistrictGov money={money} />
      <p>State government manages the state affairs and allocates resources.</p>
    </>
  );
};

export default StateGov;
