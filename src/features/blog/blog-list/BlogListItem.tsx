interface BlogListItemProp {
    title: string,
    tags: string[]
}

const BlogListItem = (prop: BlogListItemProp) => {
    const blogListItemContainerStyle: string = "border-2 border-black border-solid";

    return (
        <div className={blogListItemContainerStyle}>
            <h3>{prop.title}</h3>
        </div>
    )
}

export default BlogListItem;