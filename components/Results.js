import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({requests}) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    3xl:flex flex-wrap justify-center">
        {requests.map((item) => (
            <Thumbnail key={item.id} result={item} />
        ))}
    </FlipMove>
  )
}

export default Results