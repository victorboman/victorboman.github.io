import React, { useState, useEffect } from "react";
import Incrementor from "./components/Incrementor/Incrementor";
import Cardlist from "./components/Cardlist/Cardlist";
import Createnew from "./components/Createnew/Createnew";
import "./app.scss";

/* const userObj = {
  name: "user",
  sureName: "user",
  number: "+42131231231",
  profile: "",
}; */
const myJobs = [
  {
    workName: "JCDecaux",
    workIntro:
      "Here I worked on various tasks, such as planning digital advertising.",
  },
  {
    workName: "If Försäkringsbolag",
    workIntro:
      "Here I worked on various tasks, such as planning digital advertising.",
  },
  {
    workName: "MTG Radio",
    workIntro:
      "Here I worked on various tasks, such as planning digital advertising.",
  },
];

function App() {
  const [jobs, addJobs] = useState(myJobs);
  /*  useEffect(() => {
    setString("Siddes Bodega");
  }, [helloString]); */
  return (
    <div>
      <Incrementor initialValue={23} />
      <Createnew />
      <Cardlist myJobs={jobs} />
    </div>
  );
}

export default App;
