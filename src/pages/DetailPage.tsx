import { useParams } from "react-router-dom"
import React, { useEffect, useState } from "react";
import { IBlog } from "../../interfaces/IBlog";

interface IDetailPageProps {
    details: IBlog[]
}

const DetailPage: React.FC<IDetailPageProps> = ({ details }) => {
    const [singleBlog, setSingleBlog] = useState<null | IBlog>(null);

    const { id } = useParams();

    useEffect(() => {
        if (id && details) {
            const findBlogById = details.find((blog) => Number(blog.id) === Number(id));
            setSingleBlog(findBlogById || null);
        } else {
            console.error('details or id not found');
        }
    }, [id, details])

    if (!singleBlog) return (<p>Loading...</p>)

    return (
        <section className="detail">
            <div className="detail-img">
                <img src={singleBlog.img_url} alt={singleBlog.title} />
            </div>
            <div className="detail-title">
                <div>
                    <h3>{singleBlog.title}</h3>
                    <p><strong>{singleBlog.published_date}</strong></p>
                </div>
                <p>{singleBlog.description}</p>
                <p><strong>{singleBlog.author}</strong></p>
            </div>
        </section>
    );
}

export default DetailPage;