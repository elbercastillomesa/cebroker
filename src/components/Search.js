import React from 'react';
import axios from 'axios';

import PageNavigation from './PageNavigation';
import Header from './Header';
import SearchForm from './SearchForm';
import Footer from './Footer';

import '../search.css';
import CourseList from './CourseList';


class Search extends React.Component {

    constructor( props ){
        super(props);

        this.state = {
            query: '',
            results: {},
            loading: false,
            message: '',
            totalResults: 0, 
            totalPages: 0,
            currentPageNo: 0
        }

        this.cancel = ''
    }

    getPageCount = ( total, denominator ) => {

        const divisible = 0 === total % denominator;
        const valueToBeAdded = divisible ? 0 : 1;

        return Math.floor(total/denominator) + valueToBeAdded;
    };

    fetchSearchResults = ( updatedPageNo, query ) => {

        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : ''; //pagination option  
        const searchURL = `https://api.courses.test.cebroker.com/offerings?pageIndex=${pageNumber}&pageSize=10&sortField=RELEVANCE&state=FL&profession=36&courseType=CD_ANYTIME&term=${query}`;

        if( this.cancel ){
            this.cancel.cancel();
        }

        this.cancel = axios.CancelToken.source(); // To avoid make too fasts requests to API

        axios.get( searchURL, {
            cancelToken: this.cancel.token
            }
        ).then(
            res => {

                const total = res.data.totalItems;
                const totalPagesCount = this.getPageCount(total, 10); // Default value of result for page.
                const resultNotFoundMsg = ! res.data.items.length ? 'No more search results' : '';

                this.setState(
                    {
                        results: res.data.items,
                        message: resultNotFoundMsg,                        
                        totalResults: total, 
                        totalPages: totalPagesCount,
                        currentPageNo: updatedPageNo,
                        loading: false,
                    }
                )
            }
        ).catch( error => {
            if( axios.isCancel(error) || error ) {
                this.setState(
                    { 
                        loading: false,
                        message: 'Failed to fetch the data, check your connection'
                    }
                )
            }
        })

    };

    handlePageClick = ( type, event ) => {
                
        event.preventDefault(); 

        const updatePageNo = 'prev' === type 
            ? this.state.currentPageNo - 1 
            : this.state.currentPageNo + 1;
        
        if( ! this.state.loading ){
            this.setState( 
                {
                    loading : true, 
                    message: '',                     
                } , ( ) => {
                    this.fetchSearchResults( updatePageNo , this.state.query)
                }
            )
        }
    };

    handleOnInputChange(newState) {
        const query = newState.value;
        if( ! query ){
            this.setState( { 
                query: query,
                results: {},
                message:'',
                totalPages: 0,
                totalResults: 0
            })
        } else {
            this.setState( { 
                query: query, 
                loading: true, 
                message:'' } , () => {
                    this.fetchSearchResults( 1, query);
                })
        }
    }

	render() {

        const { query, loading, message, currentPageNo, totalPages } = this.state;

        const showPrevLink = 1 < currentPageNo;
        const showNextLink = totalPages > currentPageNo;

		return (
			<div className="mainContainer">
                <Header />
                <SearchForm
                    callbackParent={(newState) => this.handleOnInputChange(newState) } />

                <PageNavigation 
                    loading={loading} 
                    showPrevLink={showPrevLink} 
                    showNextLink={showNextLink}  
                    // eslint-disable-next-line no-restricted-globals
                    handlePrevClick={ () => this.handlePageClick('prev', event )} 
				    // eslint-disable-next-line no-restricted-globals
				    handleNextClick={ () => this.handlePageClick('next', event )}                    
                />
        
                <CourseList results = {this.state}/>

                <PageNavigation 
                    loading={loading} 
                    showPrevLink={showPrevLink} 
                    showNextLink={showNextLink}  
                    // eslint-disable-next-line no-restricted-globals
                    handlePrevClick={ () => this.handlePageClick('prev', event )} 
				    // eslint-disable-next-line no-restricted-globals
				    handleNextClick={ () => this.handlePageClick('next', event )}                    
                />
{
    //
}
                <Footer />

			</div>
		);
	}
}

export default Search;