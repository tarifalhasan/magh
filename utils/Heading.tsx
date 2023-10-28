import { FC } from "react";

interface Props {
  title: string;
  description: string;
  kyeword: string;
}
const Heading: FC<Props> = ({ title, kyeword, description }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="kyeword" content={kyeword} />
    </>
  );
};

export default Heading;
