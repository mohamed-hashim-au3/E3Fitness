import { connect } from "react-redux";
import PowerClassComponent from "../components/PowerClass";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const PowerClass = connect(
  mapStateToProps,
  mapDispatchToProps
)(PowerClassComponent);

export default PowerClass;
