import React from "react";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, author, image_url, details, rating, total_view } = news;

  return (
    <div className="card bg-base-100 shadow-md border rounded-xl mb-6">
      {/* Card Header */}
      <div className="flex justify-between items-center px-4 py-2 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">{author.published_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Card Body */}
      <div className="px-4 py-3">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <figure className="mb-3">
          <img src={image_url} alt={title} className="w-full rounded-lg" />
        </figure>
        <p className="text-sm text-gray-700">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...{" "}
              <Link to={`/news/${news._id}`} className="text-blue-600 cursor-pointer font-medium">
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      {/* Card Footer */}
      <div className="flex justify-between items-center px-4 py-2 border-t text-gray-600 text-sm">
        <div className="flex items-center gap-2">
          <FaStar className="text-orange-400" />
          <span>{rating.number}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
