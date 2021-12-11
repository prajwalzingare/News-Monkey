import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("hello");
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=d5efdb5ad5a54a788e87af194eb20507";
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles });
  }

  handlePrevClick=()=>{
console.log("Previous")
  }
  handlenextClick=()=>{
    console.log("Next")
  }

  handlenextClick
  render() {
    return (
      <div>
        <div className="container my-3">
          <h1>NewsMonkey - Top Hedlines</h1>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description
                        : ""
                    }
                    imgUrl={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between ">
          <button type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr,Previous</button>
          <button type="button" class="btn btn-dark" onClick={this.handlenextClick}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
