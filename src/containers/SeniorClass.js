import { connect } from "react-redux";
import SeniorClassComponent from "../components/SeniorClass";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const SeniorClass = connect(
  mapStateToProps,
  mapDispatchToProps
)(SeniorClassComponent);

export default SeniorClass;
