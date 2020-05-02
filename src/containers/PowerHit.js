import { connect } from "react-redux";
import PowerHitComponent from "../components/PowerHit";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const PowerHit = connect(
  mapStateToProps,
  mapDispatchToProps
)(PowerHitComponent);

export default PowerHit;
