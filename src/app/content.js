export const TEAM = "Team";
export const COMPLIMENTS = "Compliments";
export const APOLOGIES = "Apologies";
export const REACTIONS = "Reactions";

export const UP_BUTTON = "ArrowUp";
export const DOWN_BUTTON = "ArrowDown";
export const LEFT_BUTTON = "ArrowLeft";
export const RIGHT_BUTTON = "ArrowRight";

export const keyBindings = [
  [UP_BUTTON, TEAM],
  [LEFT_BUTTON, REACTIONS],
  [RIGHT_BUTTON, COMPLIMENTS],
  [DOWN_BUTTON, APOLOGIES],
];

export const keyIcons = {
  [UP_BUTTON]: "🔼",
  [LEFT_BUTTON]: "◀️",
  [RIGHT_BUTTON]: "▶️",
  [DOWN_BUTTON]: "🔽",
};

export const contentLists = {
  [TEAM]: ["I got it!", "Need boost!", "Take the shot!", "Defending..."],
  [COMPLIMENTS]: ["Nice shot!", "Great pass!", "Thanks!", "What a save!"],
  [REACTIONS]: ["OMG!", "Noooo!", "Wow!", "Close one!"],
  [APOLOGIES]: ["$#@%!", "No problem.", "Whoops...", "Sorry!"],
};
