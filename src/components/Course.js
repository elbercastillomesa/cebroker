import React from 'react';

export default ( props ) => {

    const { 
        result,
        imageCourse
    } = props;

    
    return(
        <div className="card-flex">
            <a key={result.course.id} href={result.course.provider.website} className="result-item">
                <div id={result.course.id} className="card-flex-item">
                    <div className="card-flex-wrapper">
                        <div className="card-flex-image">
                            <img className="image" src={imageCourse} alt={result.course.name} />
                        </div>
                        <div className="card-flex-content">                        
                            <p>
                                <i>Schedule: </i>
                                <span>{result.course.components[0].profession.totalHours} Hours</span>
                            </p>
                            <p>
                                <i>{result.course.deliveryMethod.description}</i>
                                <p>{result.course.description.substring(0,40)}</p>                            
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}