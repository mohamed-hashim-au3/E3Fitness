import { connect } from "react-redux";
import TrainersPageComponent from "../components/TrainersPage";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const Trainers = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrainersPageComponent);

export default Trainers;
