import React from 'react';

class SearchForm  extends React.Component {    

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.callbackParent({value: event.target.value});
    }
    
      
    render() {
      const { query } = this.props

        return (        
            <section className="inputSection">
                <div className="formSection">
                    <div className="formSection-header">Find CE for a 
                        <select className="formSection-dropdown">
                            <option>Alabama</option>
                            <option>Arkansas</option>
                            <option>Arizona</option>
                        </select>
                        <select className="formSection-dropdown">
                            <option>Doctor</option>
                            <option>Nurse</option>
                        </select>
                    </div>
                    <form className="formSection-input">
                        <input
                            type="text"
                            name="query"
                            id="search-input"
                            className="formSection-search"
                            placeholder="Search courses and providers"
                            value={this.state.value} 
                            onChange={this.handleChange}
                        />                                    
                    </form>
                    <nav className="results-selector">
                        <p><a href="#">Courses</a><a href="#">Providers</a></p>
                    </nav>
                </div>
            </section>
        );
    }
}
  
export default SearchForm;