import BlogList from "../features/blog/blog-list/BlogList";
import BlogTagList from "../features/blog/blog-tag/BlogTagList";

const Home = () => {
    return (
        <div className="">
            <div className="flex flex-row w-full">
                <div className="grow-1 mx-3">
                    <BlogList>

                    </BlogList>
                </div>


                <div className="mx-3">
                    <BlogTagList>

                    </BlogTagList>
                </div>
            </div>


        </div>
    )
}

export default Home;