import React, { Suspense } from "react";
const DecorateHeaderRadius = React.lazy(() => import("./HeaderDecorateRadius"));
const HeaderTileText = React.lazy(() => import("./HeaderTitle"));
const HeaderBtn = React.lazy(() => import("./HeaderBtn"));

export const HeaderDescription = () => {
  return (
    <div className="relative flex justify-center flex-col items-center h-[100vh] p-10 truncate">
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
