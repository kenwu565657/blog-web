
interface BlogTagProp {
    tagName: string,
    isSelected?: boolean
}

const BlogTag = (prop: BlogTagProp) => {
    return (
        
        <span className="p-1 border-solid border-2 rounded-md border-black bg-emerald-700 text-white">
            {prop.tagName} <b>{prop.isSelected ? "| X" : ""}</b>
        </span>
    )
}

export default BlogTag;