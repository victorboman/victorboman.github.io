import React from "react";
import Card from "../Card/Card";

function Cardlist(props) {
  const { myJobs } = props;
  console.log(props);
  return (
    <div>
      {myJobs.map((myJob) => (
        <Card workName={myJob.workName} workIntro={myJob.workIntro} />
      ))}
    </div>
  );
}
export default Cardlist;
