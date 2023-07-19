import React from "react";
import { Link } from "react-router-dom";
import pnf from "../assets/pnf.png";

const PageNotFound = () => {
  return (
    <main>
      <section className="pnf">
        <div className="oops">
          <p className="pnfTest">Oops - Page Not Found</p>
          <img src={pnf} alt="Frontengyaan Page Not Found" />
          <Link to="/">
            <button className="homebtn">Go Back To Word Counter</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
