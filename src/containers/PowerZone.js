import { connect } from "react-redux";
import PowerZoneComponent from "../components/PowerZone";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const PowerZone = connect(
  mapStateToProps,
  mapDispatchToProps
)(PowerZoneComponent);

export default PowerZone;
