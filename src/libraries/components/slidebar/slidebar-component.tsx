"use client";

import React from "react";
import NavigationComponent from "./navigation/navigation-component";
import LibrariesListComponent from "./libraries-list/LibrariesListComponent";

type Props = {};

const SlidebarComponent = (props: Props) => {
  return (
    <div className="min-w-[300px] relative flex flex-col max-w-[410px] flex-1 mr-2">
      <NavigationComponent />
      <LibrariesListComponent />
    </div>
  );
};

export default SlidebarComponent;
