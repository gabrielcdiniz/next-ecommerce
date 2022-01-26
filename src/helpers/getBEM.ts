export const getBEM = (block: string, element?: string, modifier?: string) => {
  let bem = `${block}`;

  if (element?.length) bem += `__${element}`;
  if (modifier?.length) bem += `--${modifier}`;

  return bem;
};
