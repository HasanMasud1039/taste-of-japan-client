/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <div className='bg-info bg.gradient rounded-4 p-1 mt-4'>
            <h1 className='text-center text-danger m-4 fw-bold'>Blog</h1>
            </div>
            <div className='bg-success bg-gradient p-4 rounded-4 mb-4 mt-5
             text-white border-4 border-danger'>
                <span className='fs-4 fw-bold'>Question 1: Write the differences between uncontrolled and controlled components?</span>
                <p className='fs-5'>
                    <span className='fs-4 fw-bold'>Answer: </span>
                    Controlled components in React are those whose state and behavior are managed by the parent component. To modify their state and behavior, these components rely on props that are given down from the parent component. Components that control their own state on an internal level are referred to as uncontrolled components.
                    They access the current value of the DOM element using a ref and modify the state as necessary. A controlled functional component is a component that receives its current value and update callback via props. An uncontrolled functional component is a component that maintains its own internal state. An uncontrolled component could be used for something like a search bar, where the search results are displayed below the bar, and the state of the search bar is managed internally by the component.
                </p>
            </div>
            <div className='bg-success bg-gradient p-4 rounded-4 mb-4
             text-white border-4 border-danger'>
                <span className='fs-4 fw-bold'>Question 1: How to validate React props using PropTypes?</span>
                <p className='fs-5'>
                    <span className='fs-4 fw-bold'>Answer: </span>
                    The techniques for sending read-only attributes across React components, operations and PropTypes, are crucial.

                    To transmit data from one component to another, we may utilize React props, which is short for properties. An app may contain bugs and unexpected errors if a component is given the incorrect kind of props.
                    When a component is called using React props, data can be sent to that component, including numbers, strings, functions, objects, and arrays. If a project consists of several parts, data can be passed from one part to another.
                </p>
            </div>
            <div className='bg-success bg-gradient p-4 rounded-4 mb-4
             text-white border-4 border-danger'>
                <span className='fs-4 fw-bold'>Question 1: Tell us the difference between nodejs and express js.</span>
                <p className='fs-5'>
                    <span className='fs-4 fw-bold'>Answer: </span>
                    A runtime environment called Node.js enables JavaScript to be used outside of a web browser. It offers a platform for creating JavaScript-based, high-performance network applications. The web application framework Express.js, on the other hand, is based on Node.js. By offering tools like routing, middleware, and templating, it makes the process of creating web applications and APIs easier. Express.js offers a higher-level abstraction layer for creating web apps and APIs, whereas Node.js essentially provides the runtime environment for creating server-side JavaScript applications. As a result, while Express.js makes it simpler to create web applications and APIs using Node.js, Node.js still serves as the foundation for creating server-side applications.

                </p>
            </div>
            <div className='bg-success bg-gradient p-4 rounded-4 mb-4
             text-white border-4 border-danger'>
                <span className='fs-4 fw-bold'>Question 1: What is a custom hook, and why will you create a custom hook?</span>
                <p className='fs-5'>
                    <span className='fs-4 fw-bold'>Answer: </span>
                    In React, a custom hook is a JavaScript function that starts with the prefix "use" and allows you to reuse stateful logic between components. Custom hooks can be used to extract complex logic and state management from a component, making it easier to reuse and test.

                    Creating a custom hook can be useful when you find yourself repeating the same logic across multiple components or when you want to separate concerns in your code. For example, if you have several components that need to fetch data from an API, you can create a custom hook that handles the API call and returns the data, allowing you to reuse that logic in each of the components. Custom hooks can also help you make your code more readable and maintainable by separating concerns and reducing the amount of code in your components.
                </p>
            </div>
        </Container>
    );
};

export default Blog;