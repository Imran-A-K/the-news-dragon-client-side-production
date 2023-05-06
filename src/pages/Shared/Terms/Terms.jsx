import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In deleniti
        consectetur ducimus ex. Autem, sit nobis. Pariatur velit deleniti
        asperiores distinctio cupiditate explicabo fuga sed tempore debitis
        atque, voluptatum autem laborum vel quisquam a libero provident minus
        ducimus, quasi, non aliquam. Nemo voluptates exercitationem dolorem amet
        minus reprehenderit iure voluptate.
      </p>
      <p>Go back to <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Terms;
