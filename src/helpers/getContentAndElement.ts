export const getContentAndElement =
  (key: string, tagName: string) =>
  (content: string, element: Element | null): boolean => {
    return key === content && tagName === element?.tagName.toLowerCase();
  };
