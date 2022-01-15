import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BUSINESS_NAME } from "../../../constants/unit-tests";
import { Header } from "@/components/Header";

describe("[Header]", () => {
  describe("when render <Header /> component", () => {
    it("should show required tags and components", () => {
      const { getByRole, getByText } = render(<Header />);

      expect(getByRole("banner")).toBeInTheDocument();
      expect(getByRole("img")).toBeInTheDocument();
      expect(getByRole("heading")).toBeInTheDocument();

      expect(getByText(BUSINESS_NAME)).toBeInTheDocument();
    });
  });
});
