import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BUSINESS_NAME } from "@/constants/unit-tests";
import { Header } from "@/components/header";
import { getBEM } from "@/helpers/getBEM";
import { getDataTestId } from "@/helpers/getDataTestId";
import { getContentAndElement } from "@/helpers/getContentAndElement";

const style = getBEM;
const tid = getDataTestId;
const matcher = getContentAndElement;

describe("When render <Header /> component", () => {
  it('should render a "header" tag wrapping container', () => {
    const { queryByRole } = render(<Header />);
    const classNameCompare = style("header");

    const headerContainerSUT = queryByRole(matcher("banner", "header"));

    expect(headerContainerSUT).not.toBe(null);
    expect(headerContainerSUT?.className.includes(classNameCompare)).toBe(true);
  });

  it('should render two "section" tag', () => {
    const { getAllByTitle } = render(<Header />);
    const sectionsContainerSUT = getAllByTitle(
      matcher("header-sections", "section")
    );

    expect(sectionsContainerSUT).not.toBe(null);
    expect(sectionsContainerSUT.length).toBe(2);
  });

  it("should render image logo", () => {
    const { queryByTestId } = render(<Header />);
    const classNameCompare = style("header", "image");

    const imageSUT = queryByTestId(matcher(tid("logoImage"), "figure"));

    expect(imageSUT).toBeInTheDocument();
    expect(imageSUT?.className.includes(classNameCompare)).toBe(true);
  });

  it("should display site name", () => {
    const { queryByTestId } = render(<Header />);
    const classNameCompare = style("header", "site-name");

    const headingSUT = queryByTestId(matcher(tid("siteName"), "h1"));

    expect(headingSUT).not.toBe(null);
    expect(headingSUT).toBeInTheDocument();
    expect(headingSUT?.className.includes(classNameCompare)).toBe(true);
    expect(headingSUT?.textContent).toBe(BUSINESS_NAME);
  });
});
