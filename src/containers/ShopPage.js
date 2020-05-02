import { connect } from "react-redux";
import ShopPageComponent from "../components/ShopPage";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const ShopPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopPageComponent);

export default ShopPage;
