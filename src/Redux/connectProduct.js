import { connect } from "react-redux";
import Product from "./Product";
import { toggle } from "./toggle";

const statePropsProduct = (state) => ({ SHOW_POPUP: state.SHOW_POPUP });
const setStatePropsProduct = (dispatch) => ({
  toggleClick: () => dispatch({ type: toggle }),
});

const ReduxProducts = connect(statePropsProduct, setStatePropsProduct)(Product);
export default ReduxProducts;
