Props

Definition: Props (short for properties) are data passed from a parent component to a child component in React.
Use: To customize child components with dynamic data.
Why we use it: So child components can receive data from parent without maintaining their own copy.

Context API

Definition: Context API is a React feature to share data globally across components without passing props at every level.
Use: For global data like theme, user info, language settings.
Why we use it: To avoid prop drilling and make data accessible anywhere in the component tree.

Context Api -- it is the library used oto solve the problem of data transfer between the components and props drilling but it works only with the recat 

Redux -- it solves the problem of many other libraries [ react-redux , readuxToolKit(RTK)]

Zustand -- it is used for the same thing