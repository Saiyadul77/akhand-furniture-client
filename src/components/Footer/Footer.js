import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='questions'>
            <h2>1. How React Work?</h2>
            <h3>Answer: React is a JavaScript library not a framework. It creates user interfaces in a likely and efficient way to using declarative code. React works declarative code. We use declarative code to create components, which is how we display information. Components means 'a Navbar', 'a Header', 'a Products', 'a Footer', 'a list'. Each line of code declares what each element of the app is. State is a re-presentation or snapshot. React works  perfectly using useState, useEffect, data load, connect with state, show data using map loop. Sometimes use for of and for in loop.  </h3>
            <h2>2. What is the difference between props and state?</h2>
            <h3>
                Answer: <br />

                <b>Props</b><br />

                i. Props are immutable which lets React do fast reference checks. <br />
                ii. It is used to pass data down from your view-controller which is your top level component. <br />
                iii. It has better performance to use this to pass data to child components
                <br /><br />
                State <br />
                i. State is mutable <br />
                ii. It should be managed in your view-controller which is your top level component. <br />

                iii. It has worse performance because it should not be accessed from child components which pass it down with props instead
            </h3>
        </div>
    );
};

export default Footer;