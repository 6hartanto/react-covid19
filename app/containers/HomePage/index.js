/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Profile from '../../images/icon-512x512.png';

export default function HomePage() {
  return (
    <div className="main">
      <header className="header">
        <div className="titleContainer">
          <h1 className="title1">
            <FormattedMessage {...messages.header} />
          </h1>
          <h1 className="title2">
            <FormattedMessage {...messages.headerTitle} />
          </h1>
        </div>
        <img src={Profile} alt="fireSpot" width="40px" />
      </header>
    </div>
  );
}
