import React from "react";
import SimpleBox from "components/SimpleBox";
import ImportBox from "components/ImportBox";

export default () => {
  return (
    <React.Fragment>
      <SimpleBox>Simple box with linaria</SimpleBox>
      <ImportBox>With import in string literal</ImportBox>
    </React.Fragment>
  );
};
