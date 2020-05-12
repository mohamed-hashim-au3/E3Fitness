import { connect } from "react-redux";
import HomeComponent from "../components/HomePage";

const mapStateToProps = (state, ownProps) => {
  return {
    login: state.Home.login
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export default Home;
