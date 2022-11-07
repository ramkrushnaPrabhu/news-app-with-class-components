import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div>
        <div className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"style={{left:'90%',zIndex:'1'}}>{source}</span>
          <img src={imageUrl?imageUrl:"https://t3.ftcdn.net/jpg/00/36/94/26/360_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted"></small>By {author?author:"unknown"} on {new Date(date).toGMTString()}</p>
            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-primary">Read News</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem