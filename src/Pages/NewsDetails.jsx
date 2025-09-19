import Header from "../components/Header";
import RightNav from "../components/Layout-components/RightNav";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const data = useLoaderData();
  // console.log(data.data[0]);
  const news = data.data[0];
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-3">
        <section className="col-span-9">
          <h2 className="font-semibold">Dragon News</h2>

          <div className="card bg-base-100  shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={news?.image_url}
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{news.title}</h2>
              <p>
                {news?.details}
              </p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back To Category</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-3">
          <RightNav></RightNav>
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
