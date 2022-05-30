
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json())

const useGithubUsers = () => {

  const {data, error} = useSWR(`https://api.github.com/users`, fetcher)
  
return{
  users:data,
  error,
  isLoading: !data && !error
}

};

export default useGithubUsers;


// const [data, setData] = useState(null);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);

// async function getDataFetch(username) {
//   setLoading(true);
//   setError(null);
//   try {
//     const call = await fetch(`https://api.github.com/users/${username}`);
//     const response = await call.json();
//     setData(response);
//   } catch (error) {
//     setError(error);
//     setData(null);
//   } finally {
//     setLoading(false);
//   }
// }
// console.log(data);
// console.log(error);
// console.log(loading);
// return [data, error, loading, getDataFetch];