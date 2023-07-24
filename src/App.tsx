import Header from "./components/Header";
import Posts from "./components/Posts";
import { useState, useEffect } from "react";
import axios from "./api/axios";
import  { Suspense } from "react";
// type blog = {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
//   };
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get("/posts");
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.error("oops could not fetch:", error);
      }
      finally{
        setIsLoading(false)
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className=" flex flex-col justify-center place-items-center w-100">
        <Header />
        <Suspense
          fallback={<div ><p className=" text-4xl text-red-500">LOADING</p></div>}
        >
          {isLoading && 
            <p className=" text-4xl text-red-500">LOADING....</p>
          }
          {!isLoading && 
           <Posts posts={data} />
          }
        </Suspense>
      </div>
    </>
  );
}

export default App;
