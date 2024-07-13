import { render, screen } from "test-utils";
import BasicLink from "../BasicLink";

describe("Test basic link component", () => {
  it("should render correctly use default props", () => {
    render(<BasicLink href="/">Home</BasicLink>);
    expect(screen.getByText("Home")).toHaveAttribute("href", "/");
  });

  it("should render correctly when have isActive props", () => {
    const { container } = render(
      <BasicLink href="/home" isActive>
        Home
      </BasicLink>
    );
    expect(screen.getByText("Home")).toHaveAttribute("href", "/home");
    expect(container.firstChild).toHaveClass("text-indigo-400");
  });

  it("should have attributes target with value _blank when have prop isExternal and isNewTab", () => {
    render(
      <BasicLink href="/wdwiramadhan.com" isExternal isNewTab>
        Home
      </BasicLink>
    );
    expect(screen.getByText("Home")).toHaveAttribute("target", "_blank");
  });

  it("should have attributes target with value _self when have prop isExternal", () => {
    render(
      <BasicLink href="/wdwiramadhan.com" isExternal>
        Home
      </BasicLink>
    );
    expect(screen.getByText("Home")).toHaveAttribute("target", "_self");
  });
});
