import BlogCard from '../components/BlogCard';
import blogData from '../data/BlogData'

const Blog = () => {
    return (
        <section className="blog">
            {blogData?.map((blogItem) => (
                <BlogCard blogCard={blogItem} />
            ))}
        </section>
    );
}

export default Blog;