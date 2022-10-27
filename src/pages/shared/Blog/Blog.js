import React from 'react';

const Blog = () => {
    return (
        <div className='text-justify'>
            <h2>Questions & Answers.</h2>
            <h3>What is cors?</h3>
            <p>Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.</p>

            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>It’s easy to start a project with Firebase or add a Firebase to your project. It allows real-time database connection, which means multiple users can see the changes in the data when the data gets created or edited. Data transmission is handled with web sockets so you don’t have to send requests to get new data, you only need to subscribe once.
                The same applies for file storage. Quick setup authentication via the major providers (Google, Twitter, Facebook, GitHub). Https by default - secure http traffic without setting up certificates. Any static html/javascript content can be hosted.</p>

            <h5>Authentication Types:</h5>
            <p>1. Multi-factor authentication</p>
            <p>2. Certificate-based authentication</p>
            <p>3. Biometric authentication</p>
            <p>4. Token-based authentication</p>

            <h3>How does the private route work?</h3>
            <p>
                Private Routes
                The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.
                If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in). Athenticated routes with "PrivateRoute" component.

            </p>

            <h3>What is Node? How does Node work?</h3>
            <p>Node.js is a lean, fast, cross-platform JavaScript runtime environment that is useful for both servers and desktop applications. Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. <br />

                Node.js basically works on two concept: <br />

                1. Asynchronous <br />
                2.Non-blocking I/O</p>
        </div>
    );
};

export default Blog;