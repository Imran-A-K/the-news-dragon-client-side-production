import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import moment from "moment";
import {
  FaEye,
  FaRegBookmark,
  FaShareAlt,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const NewsCart = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="ps-2 flex-grow-1">
          <p className="mb-0">{author?.name}</p>
          <p>
            <small>{moment(author?.published_date).format("YYYY-MM-D")}</small>
          </p>
        </div>
        <div>
          <FaRegBookmark />
          <FaShareAlt />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1 d-flex align-items-center">
          {/* <Rating
      placeholderRating={rating?.number}
      readonly
      emptySymbol={<FaRegStar ></FaRegStar>}
      placeholderSymbol={<FaStar className="text-warning" />}
      fullSymbol={<FaStar />}
> </Rating> */}
          <Rating
            style={{ maxWidth: 150 }}
            value={Math.round(rating?.number || 0)}
            readOnly
            // onChange={setRating}
          />
          <span className="ms-2">{rating?.number}</span>
        </div>
        <div>
          <FaEye /> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCart;
