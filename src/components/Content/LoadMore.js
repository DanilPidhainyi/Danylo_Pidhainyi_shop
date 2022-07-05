import React, { Component } from "react";
import { LoadMoreBtn } from "./LoadMore.style";

export default class LoadMore extends Component {
  onLoadMoreEvent = () => {};
  render() {
    return (
      <LoadMoreBtn
        onClick={() => {
          this.onLoadMoreEvent();
        }}
      >
        Load More
      </LoadMoreBtn>
    );
  }
}
