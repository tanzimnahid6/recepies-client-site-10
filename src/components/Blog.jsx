import React from "react"
import ReactDOM from "react-dom"
import Pdf from "react-to-pdf"
const ref = React.createRef()

const Blog = () => {
  return (
    <div>
      <div ref={ref} className="mx-8">
        <div className="border p-4">
          <p className="font-bold">
            1.Differences between uncontrolled and controlled components.
          </p>
          <p>
            In the realm of React, there are two types of components: controlled
            and uncontrolled. Controlled components are those whose state and
            behavior are dictated by their parent component. These components
            depend on props passed down from the parent to alter their internal
            state and behavior. On the other hand, uncontrolled components
            manage their own state internally, without relying on their parent
            component to dictate their behavior. These components are
            self-contained and do not require external input to alter their
            state.
          </p>
        </div>
        <div className="border p-4">
          <p className="font-bold">
            2.How to validate React props using PropTypes
          </p>
          <p>
          When developing a React application, you’ll need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. Forgetting to pass a required prop into a component that needs it could cause your app to behave unexpectedly.
          </p>
        </div>
        <div className="border p-4">
          <p className="font-bold">
            3.Difference between nodejs and express js
          </p>
          <p>
          Node.js is an open-source, cross-platform JavaScript runtime environment.Node.js is a platform for building server-side event-driven i/o application using javascript.
          on the other hand,Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.It is a framework based on node.js for building web-application using principles and approaches of node.js
          </p>
        </div>
        <div className="border p-4">
          <p className="font-bold">
            4.What is a custom hook, and why will you create a custom hook
          </p>
          <p>
          A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. That's it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.
          </p>
        </div>
      </div>
      <div className="text-center m-8">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button className="font-bold w-22 btn" onClick={toPdf}>
              Download Pdf
            </button>
          )}
        </Pdf>
      </div>
    </div>
  )
}

export default Blog
