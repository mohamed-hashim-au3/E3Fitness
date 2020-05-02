import { connect } from "react-redux";
import BlogPageComponent from "../components/BlogPage";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

const BlogPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogPageComponent);

export default BlogPage;
