export const inputFocus = (element) => {
    if (element.key === "Delete" || element.key === "Backspace") {
      const next = element.target.tabIndex - 2;
      if (next > -1) {
        element.target.form.elements[next].focus();
      }
    } else {
      const next = element.target.tabIndex;
      if (next < 5) {
        element.target.form.elements[next].focus();
      }
    }
  };