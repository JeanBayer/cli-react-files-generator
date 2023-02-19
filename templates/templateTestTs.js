export function templateTestTs(componentName) {
  return `import { render } from "@testing-library/react";
import { ${componentName} } from "./${componentName}";

describe("${componentName}", () => {
  test("renders component", () => {
    const { getByText } = render(<${componentName} />);
    const componentElement = getByText("${componentName}");
    expect(componentElement).toBeInTheDocument();
  });
});
  `;
}
