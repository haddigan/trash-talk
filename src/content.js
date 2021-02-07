export const TEAM = "team";
export const COMPLIMENTS = "compliments";
export const APOLOGIES = "apologies";
export const REACTIONS = "reactions";

export const UP_BUTTON = "upButton";
export const DOWN_BUTTON = "downButton";
export const LEFT_BUTTON = "leftButton";
export const RIGHT_BUTTON = "rightButton";

export const keyBindings = [
  [UP_BUTTON, TEAM],
  [LEFT_BUTTON, REACTIONS],
  [RIGHT_BUTTON, COMPLIMENTS],
  [DOWN_BUTTON, APOLOGIES],
];

export const contentLists = {
  [TEAM]: ["I got it!", "Need boost!", "Take the shot!", "Defending..."],
  [COMPLIMENTS]: ["Nice shot!", "Great pass!", "Thanks!", "What a save!"],
  [REACTIONS]: ["OMG!", "Noooo!", "Wow!", "Close one!"],
  [APOLOGIES]: ["$#@%!", "No problem.", "Whoops...", "Sorry!"],
};
