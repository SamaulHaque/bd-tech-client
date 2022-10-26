import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>Questions & Answers.</h2>
            <h3>What is cors?</h3>
            <p>Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.</p>

            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>It’s easy to start a project with Firebase or add a Firebase to your project. It allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. Data transmission is handled with web sockets so you don’t have to send requests to get new data, you only need to subscribe once.
            The same applies for file storage. Quick setup authentication via the major providers (Google, Twitter, Facebook, GitHub). Https by default - secure http traffic without setting up certificates. Any static html/javascript content can be hosted.</p>

            <h5>Authentication Types:</h5>
            <p>1. Multi-factor authentication</p>
            <p>2. Multi-factor authentication</p>
            <p>3. Multi-factor authentication</p>
            <p>4. Multi-factor authentication</p>
        </div>
    );
};

export default Blog;