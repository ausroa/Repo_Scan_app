import React from 'react';
import Utils from '../../hoc/Utils';
import Header from '../Header/Header';
import classes from './Layout.css'

const layout = (props) => (
    <Utils>
        <Header></Header>
        <main className="Content">
            {props.children}
        </main>
    </Utils>
);

export default layout;