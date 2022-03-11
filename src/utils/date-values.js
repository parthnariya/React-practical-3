const today = new Date();
export const date = String(today.getDate()).padStart(2, "0");
export const month = String(
    today.toLocaleString("default", { month: "short" })
  ).toUpperCase(); //January is 0!
export const day = String(today.toLocaleDateString("default", { weekday: "long" }));
export const year = today.getFullYear();