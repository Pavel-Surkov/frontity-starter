import { styled } from "frontity";
import common from "./common";

const StyledTitleSizeL = styled.h1`
  font-family: ${common};
  font-size: 6.4rem;
  line-height: calc(80 / 64);
  font-weight: 700;
`;

const StyledTitleSizeM = styled.h2`
  font-family: ${common};
  font-size: 3.6rem;
  line-height: calc(47 / 36);
  font-weight: 700;
`;

const StyledTitleSizeS = styled.h3`
  font-family: ${common};
  font-size: 3.2rem;
  line-height: calc(42 / 32);
  font-weight: 700;
`;

const StyledTitleSizeXS = styled.h4`
  font-family: ${common};
  font-size: 2rem;
  line-height: calc(28 / 20);
  font-weight: 700;
`;

const title = {
  StyledTitleSizeXS,
  StyledTitleSizeS,
  StyledTitleSizeM,
  StyledTitleSizeL,
};

export default title;
