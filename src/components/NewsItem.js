import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsurl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={
              imgUrl
                ? imgUrl
                : "https://media.istockphoto.com/photos/gentoo-penguin-waddling-along-on-a-white-sand-beach-picture-id511366776?b=1&k=20&m=511366776&s=170667a&w=0&h=unWYvtZELGCGtyrBF6gHMGeWC2LH9lhMAze9vCsu7b4="
            }
            className="card-img-top"
            alt="...."
          />
          <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <a
              rel="noreferrer"
              href={newsurl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
