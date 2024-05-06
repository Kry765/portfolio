import React, { Suspense } from "react";
const DecorateHeaderRadius = React.lazy(() => import("./HeaderDecorateRadius"));
const HeaderTileText = React.lazy(() => import("./HeaderTitle"));
const HeaderBtn = React.lazy(() => import("./HeaderBtn"));

export const HeaderDescription = () => {
  return (
    <div
      className={`relative flex justify-center flex-col w-full items-start h-[100vh] truncate md:items-center`}
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
