import { Component } from 'react'
import './HomeSearchBar.scss'

class HomeSearchBar extends Component {
    render() {
        return (
            <div className="HomeSearchBar">
                <div className='box1'>
                    <div className='box2'>
                        <svg t="1620706739356" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5727" ><path d="M634.354676 60.994166c-177.791266 0-322.431503 146.419767-322.431503 326.396815 0 75.621305 25.605168 145.260361 68.404949 200.661136L74.581626 898.115941c-18.068518 18.323321-17.860786 47.827285 0.460488 65.897849 9.074679 8.954953 20.894889 13.419637 32.715099 13.419637 12.026918 0 24.058952-4.631484 33.174564-13.880125l306.286802-310.611294c52.810786 38.248116 117.39471 60.85295 187.136098 60.85295 177.785126 0 322.42127-146.424884 322.42127-326.403978C956.775946 207.413933 812.139801 60.994166 634.354676 60.994166zM634.354676 630.953206c-132.119063 0-239.601007-109.261473-239.601007-243.561202 0-134.293589 107.482967-243.555062 239.601007-243.555062 132.107807 0 239.58975 109.261473 239.58975 243.555062C873.943402 521.691733 766.462482 630.953206 634.354676 630.953206zM795.971563 391.178237c-2.426259 18.216897-17.987676 31.459502-35.874045 31.459502-1.597381 0-3.211135-0.106424-4.833075-0.323365-19.837814-2.644223-33.777291-20.872377-31.133068-40.71326 7.230682-54.238298-53.225225-82.588997-55.803957-83.766822-18.11866-8.303106-26.238594-29.720905-18.053168-47.8938 8.184403-18.172895 29.408797-26.349111 47.628764-18.288528C702.503798 233.695506 810.410414 282.873556 795.971563 391.178237zM719.667713 470.648197c7.66354 7.659447 12.117992 18.328437 12.117992 29.199019 0 10.977006-4.454452 21.641903-12.117992 29.306466-7.659447 7.766894-18.427698 12.114922-29.297256 12.114922-10.875698 0-21.537526-4.348028-29.303396-12.114922-7.66354-7.664563-12.112875-18.328437-12.112875-29.306466 0-10.870582 4.449335-21.539572 12.112875-29.199019 7.765871-7.766894 18.427698-12.222369 29.303396-12.222369C701.240015 458.426851 712.008266 462.882326 719.667713 470.648197z" p-id="5728"></path></svg>
                        <input type='text' />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeSearchBar
