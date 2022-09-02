import { CARTUI } from "../action-types/cartUI-types";

interface OpenCartUI {
  type: CARTUI.OPEN;
}

interface CloseCartUI {
  type: CARTUI.CLOSE;
}

export type CartUIAction = OpenCartUI | CloseCartUI;
