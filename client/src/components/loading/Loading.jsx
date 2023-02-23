import { PulseLoader } from "react-spinners";

import "./Loading.css";

export default function Loading() {
  return (
    <div className="containerLoading">
      <PulseLoader
        color="rgba(15,65,162,1)"
        cssOverride={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20rem",
        }}
        margin={20}
        className="spinnerPulse"
      />
    </div>
  );
}
