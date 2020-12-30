import React from 'react';
import { Route, Link, useRouteMatch } from 'react-router-dom';
import './AboutUs.css';
import SiteHistory from './SiteHistory';
import SiteMission from './SiteMission';


function AboutUs() {
    const { path, url } = useRouteMatch();

    return (
        <div className="about-us">
            <ul>
                <li>
                    <Link to={`${url}/site-history`}>Site History</Link>
                </li>
                <li>
                    <Link to={`${url}/site-mission`}>Site Mission</Link>
                </li>
            </ul>
            <Route path={`${path}/site-history`}>
                <SiteHistory />
            </Route>
            <Route path={`${path}/site-mission`}>
                <SiteMission />
            </Route>
        </div>
    )
}

export default AboutUs;