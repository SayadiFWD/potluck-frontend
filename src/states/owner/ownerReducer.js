// Action Types
import * as types from "states/owner/ownerTypes";

const initialOwner = null;
export const ownerReducer = (owner = initialOwner, action) => {
	switch (action.type) {
    case types.COMPARE_IDS:
      return owner = action.payload;
		default:
			return owner;
	}
};


