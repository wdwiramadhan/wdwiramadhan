import { render, screen } from "test-utils";
import { BasicLink } from "../";

describe("Test basic link component", () => {
  it("should render correctly use default props", () => {
    render(<BasicLink href="/home">Home</BasicLink>);
    expect(screen.getByText("Home")).toHaveAttribute("href", "/home");
  });

  it("should have attributes target with value _blank", () => {
    render(
      <BasicLink href="wdwiramadhan.com" isExternal isNewTab>
        Home
      </BasicLink>
    );
    expect(screen.getByText("Home")).toHaveAttribute("target", "_blank");
  });
});
