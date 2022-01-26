import { getBEM } from "@/helpers/getBEM";
import { useCallback, useState } from "react";

export const useBEM = (keys: { readonly [key: string]: string }) => {
  const [styles, setStyles] = useState(keys);

  const getStyle = useCallback(
    (block: string, element?: string, modifier?: string) =>
      styles[getBEM(block, element, modifier)],
    [styles]
  );

  return {
    styles,
    setStyles,
    getStyle,
  };
};
