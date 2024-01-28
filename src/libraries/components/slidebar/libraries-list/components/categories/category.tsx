import React from "react";

type Props = {
  content: string;
};

const CategoryItem = (props: Props) => {
  const { content } = props;
  return (
    <p className=" mr-2 px-3 py-[5px] bg-[#292929] rounded-xl hover:bg-[#3b3838] hover:cursor-pointer hover:text-[white] text-[13px] text-white">
      {content}
    </p>
  );
};

export default CategoryItem;
