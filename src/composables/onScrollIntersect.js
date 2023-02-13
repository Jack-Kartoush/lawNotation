import { onIntersect } from "./onIntersect";
import { ref } from "vue";
import { defineEmits } from "vue";

export const onScrollIntersect = (elementToWatch, onEnter) => {

  function onExit(entry) {
    console.log("exiting", entry);
  }

  console.log("onEnter", onEnter);

  return onIntersect(elementToWatch, onEnter, onExit, false, {
    threshold: 0.8,
  });
};
