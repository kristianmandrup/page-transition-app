import { fruits } from "./fruits";

export const map = {};
for (const item of fruits) {
  const key = item.name;
  map[key] = item;
}
