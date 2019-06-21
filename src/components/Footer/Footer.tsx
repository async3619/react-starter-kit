/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { FunctionComponent } from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';
import { Container } from 'reactstrap';
import s from './Footer.css';
import Link from '../Link';

const Footer: FunctionComponent = () => {
  useStyles(s);
  return (
    <div className={s.root}>
      <Container className={s.container}>
        <span className={s.text}>© Your Company</span>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/">
          Home
        </Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/admin">
          Admin
        </Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/privacy">
          Privacy
        </Link>
        <span className={s.spacer}>·</span>
        <Link className={s.link} to="/not-found">
          Not Found
        </Link>
      </Container>
    </div>
  );
};

export default Footer;
