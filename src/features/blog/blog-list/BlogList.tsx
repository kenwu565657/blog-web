import BlogListItem from "./BlogListItem";

const BlogList = () => {
    const blogArray = [
        {
            title: "test",
            tags: ["test", "test"]
        },
        {
            title: "test",
            tags: ["test", "test"]
        }
    ];

    return (
        <div>
            {
                blogArray.map((blog, i) => {
                    return <BlogListItem key={i} title={blog.title} tags={blog.tags}></BlogListItem>
                })
            }
        </div>
    )
}

export default BlogList;