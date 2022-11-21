import axios from "axios";
import {Video} from '../types'
import VideoCard from "../components/VideoCard";
import NoResults from "../components/NoResults";
interface IProps {
    video:Video[]
}
const Home = ({video}: IProps) => {
  return (
   <div className='flex flex-col gap-10 videos h-full'>
       {video.length ? (
           video.map((video:Video) => (
               <VideoCard post={video} key={video._id}/>
           ))
       ) : (
           <NoResults text={'No Videos'}/>
       )}

   </div>
  )
}
export const getServerSideProps = async () => {
    const {data} = await axios.get(`http://localhost:3000/api/post`);
    return{
        props:{
            video:data
        }
    }
}
export default Home