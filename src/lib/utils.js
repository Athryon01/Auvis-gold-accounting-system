import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getCleanDisplayName = (email) => {
  if (!email || typeof email !== "string" || !email.includes("@")) {
    return "User";
  }

  try {
    let localPart = email.split("@")[0];

    localPart = localPart.replace(/^"|"$/g, "");
    localPart = localPart.split("+")[0];

    const spaceSeparated = localPart.replace(/[._\-!#$%&'*+/=?^`{|}~]+/g, " ");
    const finalName = spaceSeparated
      .trim()
      .split(/\s+/) // Split by one or more spaces
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    return finalName || "User";
  } catch (error) {
    console.error("Name extraction failed:", error);
    return "User";
  }
};
