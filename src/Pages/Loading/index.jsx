import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
function LoadingWaitGetData(props) {
  if (!props.loading) {
    return null;
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader type="ThreeDots" color="#2BAD60" height="100" width="100" />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    loading: state.productsReducer.loading,
  };
};
export default connect(mapStateToProps, null)(LoadingWaitGetData);