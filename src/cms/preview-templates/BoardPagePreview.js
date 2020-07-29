import React from "react";
import PropTypes from "prop-types";
import { BoardPageTemplate } from "../../templates/board-page";

const BoardPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data", "title"]);
  console.log("DATA: ", data);

  if (data) {
    return (
      <BoardPageTemplate
        title={data.intro.title}
        description={data.intro.description}
        boardmembers={data.boardmembers}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

BoardPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default BoardPagePreview;
