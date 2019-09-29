/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { ReactNode } from "react";
import StyleContext from "isomorphic-style-loader/StyleContext";

import AppContext, { AppContextTypes } from "../context";

interface Props {
    insertCss: Function;
    context: AppContextTypes;
    children: ReactNode;
}

const App = ({ insertCss, context, children }: Props) => (
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    <AppContext.Provider value={context}>
        <StyleContext.Provider value={{ insertCss }}>{children}</StyleContext.Provider>
    </AppContext.Provider>
);

export default App;
