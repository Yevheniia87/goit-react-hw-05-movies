import { useState } from "react";
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
export default function Loader() {
  return (
    <RingLoader
      color="#3f51b5"
      loading={useState(true)}
      css={override}
      size={80}
    />
  );
}
