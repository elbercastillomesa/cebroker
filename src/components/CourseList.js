import React from 'react';
import noImage from '../images/not-found.jpg';
import Loader from '../images/loader.gif';
import Course from './Course';

class CourseList  extends React.Component {
    
    constructor(props) {
      super(props)
      this.state = {
        results: {},
        message: '',
        loading: false,
      }
    }
  
    render() {
      const { results, message, loading } = this.props.results

      if( Object.keys( results ).length && results.length ){
        return (        
            <div className="results-container">              
              { 
                results.map( result => {
                    
                  var imageCourse = result.course.featuredBanner ? `https://storage.cebroker.com/CEBroker/`+result.course.featuredBanner : noImage;
                    
                    return( 
                      <Course result={result} imageCourse={imageCourse} />                          
                    )
                })
              }
            </div>  
        )
      } else {
          return(
            <div className="text-field-footer">
                {message && <p className="message"> {message }</p>}
                <img src={Loader} className={`search-loading ${ loading ? 'show' : 'hide'}`} alt="Loader"/>
            </div>
          )
      }
    }
  }
  
export default CourseList;