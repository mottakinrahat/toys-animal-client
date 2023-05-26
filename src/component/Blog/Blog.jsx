import React, { useEffect } from 'react';

const Blog = () => {
  useEffect(() => {
    document.title = "Animal|Blog"
  }, [])
  return (
    <div className="container mx-auto px-4 py-8">


      <div className="mb-8  bg-cyan-100 rounded-lg p-2">
        <h2 className="text-2xl font-bold mb-4 text-green-600">Question 1:What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
        <p className="text-gray-700">

          Access token: A credential used by a client to access protected resources. It's included in the request headers and verifies the user's permissions.

          Refresh token: A long-lived credential used to obtain a new access token when the current one expires. It's securely stored on the client-side and not sent with each request.

          Storage on client-side: Options include storing tokens as HTTP-only secure cookies or in local storage/session storage.
        </p>
      </div>

      <div className="mb-8 bg-cyan-200 rounded-lg p-2">
        <h2 className="text-2xl font-bold  text-green-700 mb-4">Question 2: Compare SQL and NoSQL databases?</h2>
        <p className="text-gray-700">
          SQL databases, also known as relational databases, store data in tables with predefined schemas. They use
          structured query language (SQL) for defining and manipulating the data. SQL databases provide strong data
          consistency and support complex queries, but they are less flexible when it comes to scaling and handling
          unstructured data.
        </p>
        <p className="text-gray-700">
          NoSQL databases, on the other hand, are non-relational and provide a more flexible data model. They can handle
          large amounts of unstructured and semi-structured data. NoSQL databases are highly scalable and can distribute
          data across multiple nodes, but they may sacrifice some level of data consistency and support for complex
          queries.
        </p>
      </div>

      <div className="mb-8  bg-cyan-300 rounded-lg p-2" >
        <h2 className="text-2xl  text-green-800 font-bold mb-4">Question 3: What is Express.js? What is Nest.js?</h2>
        <p className="text-gray-700">
          Express.js is a popular minimalist web framework for Node.js. It provides a simple and flexible way to build
          web applications and APIs. Express.js offers a range of features for handling HTTP requests, routing,
          middleware, and more. It has a large ecosystem of plugins and is widely used in the Node.js community.
        </p>
        <p className="text-gray-700">
          Nest.js is a progressive Node.js framework for building scalable and efficient server-side applications. It is
          built with TypeScript and combines elements of object-oriented programming (OOP), functional programming (FP),
          and functional reactive programming (FRP). Nest.js provides a modular architecture, dependency injection,
          and built-in support for TypeScript, making it a powerful choice for building enterprise-grade applications.
        </p>
      </div>

      <div className='bg-cyan-100 rounded-lg p-2' >
        <h2 className="text-2xl font-bold  text-green-900 mb-4">Question 4: What is MongoDB aggregate and how does it work?</h2>
        <p className="text-gray-700">
          MongoDB's aggregate function is used for advanced data processing and aggregation operations. It allows you to
          perform complex queries, transformations, and computations on the data stored in MongoDB collections. The
          aggregate function takes an array of stages as input, where each stage represents a specific data processing
          step.
        </p>
        <p className="text-gray-700">
          Each stage in the aggregation pipeline can perform various operations such as filtering, grouping, sorting,
          projecting, and joining data from multiple collections. The output of one stage becomes the input for the next
          stage, allowing you to create a sequence of data processing steps. Aggregation pipelines in MongoDB are highly
          flexible and can handle a wide range of data processing tasks efficiently.
        </p>
      </div>
    </div>
  );
};

export default Blog;
