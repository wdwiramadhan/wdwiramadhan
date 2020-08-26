import { ReactNode } from "react";

type Props = {
  children: ReactNode,
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto sm:px-5 px-4">{children}</div>;
};

export default Container;
