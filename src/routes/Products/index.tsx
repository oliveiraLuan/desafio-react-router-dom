import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import HeaderCategories from "../../components/HeaderCategories";
import "./styles.css";

export default function Products() {
  return (
    <>
      <Header/>
      <section className="content">
        <div className="container">
          <HeaderCategories />
          <div className="products">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
}
