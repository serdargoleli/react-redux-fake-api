import * as ActionsTypes from "../actionsTypes";
import random from "random";

const backgroundColor = ["b6e3f4", "c0aede", "d1d4f9", "ffd5dc", "ffdfbf"];
const clothingColor = ["456dff", "54d7c7", "6dbb58", "7555ca", "e24553", "f3b63a", "f55d81"];
const eyes = ["glasses", "happy", "open", "sleep", "sunglasses", "wink"];
const facialHair = ["beardMustache", "goatee", "pyramid", "shadow", "soulPatch", "walrus"];
const hair = [
  "bald",
  "balding",
  "beanie",
  "bobBangs",
  "bobCut",
  "bunUndercut",
  "buzzcut",
  "cap",
  "curly",
  "curlyBun",
  "curlyHighTop",
  "extraLong",
  "fade",
  "long",
  "mohawk",
  "pigtails",
  "shortCombover",
  "shortComboverChops",
  "sideShave",
  "straightBun",
];

const setUsers = (val) => {
  return { type: ActionsTypes.SET_USERS, payload: val };
};
const setUsersAvatar = () => {
  let settingsUrl = "";
  let mainUrl = `https://api.dicebear.com/5.x/personas/svg?seed=Aneka`;
  settingsUrl += `&backgroundColor=${backgroundColor[random.int(backgroundColor.length - 1)]}`;
  settingsUrl += `&clothingColor=${clothingColor[random.int(clothingColor.length - 1)]}`;
  settingsUrl += `&eyes=${eyes[random.int(eyes.length - 1)]}`;
  settingsUrl += `&facialHair=${facialHair[random.int(facialHair.length - 1)]}`;
  settingsUrl += `&hair=${hair[random.int(hair.length - 1)]}`;
  return { type: ActionsTypes.SET_USER_AVATAR, payload: mainUrl + settingsUrl };
};

const userActions = { setUsers, setUsersAvatar };

export default userActions;
