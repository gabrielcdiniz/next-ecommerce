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
    // ? ARRANGE
    const { queryByRole } = render(<Header />);
    const classNameCompare = style("header");

    // ? ACT
    const headerContainerSUT = queryByRole(matcher("banner", "header"));

    // ? ASSERT
    expect(headerContainerSUT).not.toBe(null);
    expect(headerContainerSUT?.className.includes(classNameCompare)).toBe(true);
  });

  it('should render two "section" tag', () => {
    // ? ARRANGE
    const { getAllByTitle } = render(<Header />);

    // ? ACT
    const sectionsContainerSUT = getAllByTitle(
      matcher("header-sections", "section")
    );

    // ? ASSERT
    expect(sectionsContainerSUT).not.toBe(null);
    expect(sectionsContainerSUT.length).toBe(2);
  });

  it("should render image logo", () => {
    // ? ARRANGE
    const { queryByTestId } = render(<Header />);
    const classNameCompare = style("header", "image");

    // ? ACT
    const imageSUT = queryByTestId(matcher(tid("logoImage"), "figure"));

    // ? ASSERT
    expect(imageSUT).toBeInTheDocument();
    expect(imageSUT?.className.includes(classNameCompare)).toBe(true);
  });

  it("should display site name", () => {
    // ? ARRANGE
    const { queryByTestId } = render(<Header />);
    const classNameCompare = style("header", "site-name");

    // ? ACT
    const headingSUT = queryByTestId(matcher(tid("siteName"), "h1"));

    // ? ASSERT
    expect(headingSUT).not.toBe(null);
    expect(headingSUT).toBeInTheDocument();
    expect(headingSUT?.className.includes(classNameCompare)).toBe(true);
    expect(headingSUT?.textContent).toBe(BUSINESS_NAME);
  });

  it('should render "cart action" button', () => {
    // ? ARRANGE
    const { queryByTestId } = render(<Header />);
    const classNameButtonCompare = style("header", "cart-button");
    const classNameImageCompare = style("header", "cart-image");
    const classNameBadgeCompare = style("header", "cart-badge");

    // ? ACT
    const buttonSUT = queryByTestId(matcher(tid("cartAction"), "button"));
    const imageSUT = queryByTestId(matcher(tid("cartImage"), "figure"));
    const badgeSUT = queryByTestId(matcher(tid("cartBadge"), "span"));

    // ? ASSERT
    expect(buttonSUT).not.toBe(null);
    expect(buttonSUT).toBeInTheDocument();
    expect(buttonSUT?.className.includes(classNameButtonCompare)).toBe(true);

    expect(imageSUT).not.toBe(null);
    expect(imageSUT).toBeInTheDocument();
    expect(imageSUT?.className.includes(classNameImageCompare)).toBe(true);

    expect(badgeSUT).not.toBe(null);
    expect(badgeSUT).toBeInTheDocument();
    expect(badgeSUT?.className.includes(classNameBadgeCompare)).toBe(true);
  });
});
