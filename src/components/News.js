import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    country:"in",
    pageSize:8,
    category:"general"
  }

  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  capitalizeletter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
    document.title=`${this.capitalizeletter(this.props.category)}-NewsMonkey`;
  }

  /*async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=30d63810341f42198eda8dc15fd45313&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false,
    });

  }*/

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=30d63810341f42198eda8dc15fd45313&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false,
    });
    //this.updateNews();
  }

  handelnext = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=30d63810341f42198eda8dc15fd45313&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parseddata = await data.json();
      this.setState({
        articles: parseddata.articles,
        page: this.state.page + 1,
        loading: false
      });
    }
    //this.updateNews();
    //this.setState({page:this.state.page+1});
   
    

  }

  handelprev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=30d63810341f42198eda8dc15fd45313&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      page: this.state.page - 1,
      loading: false
    });
    //this.updateNews();
    //this.setState({page:this.state.page-1});
    

  }

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center' style={{margin:'30px 0px'}}>{`NewsMonkey- Top Headlines on ${this.capitalizeletter(this.props.category)}`}</h2>
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className='col-md-4'>
              <NewsItem key={element.url} title={element.title ? element.title.slice(0, 88) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div><hr />
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" onClick={this.handelprev} className="btn btn-dark">&larr; Previous</button>
          <button disabled={(this.state.page + 1) > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handelnext} className="btn btn-dark">Next &rarr;</button>
        </div>

      </div>
    )
  }
}

export default News