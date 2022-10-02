var num = Math.floor(Math.random() * 3) + 1;

$("#card").wScratchPad({
  size: 100, // The size of the brush/scratch.
  bg: `Images/offer ${num}.svg`, // Background (image path or hex color).
  fg: `Images/front.svg`, // Foreground (image path or hex color).
  cursor: "pointer", // Set cursor.
});
