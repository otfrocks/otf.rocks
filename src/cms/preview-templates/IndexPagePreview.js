import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();
  console.log("DATA: ", data);
  if (data) {
    return (
      <IndexPageTemplate
      title={data.title}
      eventspitch={data.eventspitch}
      intro={data.intro}
      sommerparty={data.sommerparty}
      suggestions={data.suggestions}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
