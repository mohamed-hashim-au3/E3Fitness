import { connect } from "react-redux";
import HeaderComponent from "../../components/common/Header";

const mapStateToProps = (state, ownProps) => {
  return {
    login: state.Home.login
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleLogin: () => {
      dispatch({ type: "LOGIN", payload: false });
    }
  };
};

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

export default Header;
