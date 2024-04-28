import React, { Suspense } from "react";
import bgColor from "./Header.module.scss";
const DecorateHeaderRadius = React.lazy(() => import("./HeaderDecorateRadius"));
const HeaderTileText = React.lazy(() => import("./HeaderTitle"));
const HeaderBtn = React.lazy(() => import("./HeaderBtn"));

export const HeaderDescription = () => {
  return (
    <div
      className={`relative flex justify-center flex-col items-center h-[100vh] p-10 truncate ${bgColor.headerBgc}`}
    >
      <Suspense fallback={<div>Loading..</div>}>
        <DecorateHeaderRadius />
        <HeaderTileText
          Christopher="Christopher"
          WebDeveloper="Web-Developer"
        />
        <HeaderBtn />
      </Suspense>
    </div>
  );
};
