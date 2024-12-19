import React from "react";
import { IBlog } from "../../interfaces/IBlog";
import { Link } from "react-router-dom";

interface IBlogCardProps {
    blogCard: IBlog
}

const BlogCard: React.FC<IBlogCardProps> = ({ blogCard }) => {
    return (
        <div className="blog-card">
            <div className="blog-img">
                <img src={blogCard.img_url} alt="" />
            </div>
            <h3>{blogCard.title}</h3>
            <Link to={`/blog/detail/${blogCard.id}`} className="btn-read-more">Read more</Link>
        </div>
    );
}

export default BlogCard;