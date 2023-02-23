// import { Component } from 'react';
import css from './container.module.css';

const Container = ({children}) => (
    <div className={css.container}>
        {children}
    </div>
);

export default Container;