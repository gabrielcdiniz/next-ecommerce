import { useConfig } from "@contexts/ConfigContext";
import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { handle } = useConfig();

  useEffect(() => {
    handle({ isActive: false });
  }, [handle]);

  return <>TESTE</>;
};

export default Home;
