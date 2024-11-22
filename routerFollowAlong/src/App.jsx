import { useEffect, useState } from "react";

import "./App.css";

function useAppUrl() {
  const [imgUrl, setImgUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("", { mode: "cors" })
      .then((response) => {
        if (response.status != 200) throw new Error("oops!");
        return response.json();
      })
      .then((response) => setImgUrl(response[0].url)) //could have added setError(null)
      .catch((error) => setError(error)) //could have added setImgUrl(null)
      .finally(() => setLoading(false));
  }, []);
  return { imgUrl, error, loading };
}
function App() {
  let { imgUrl, error, loading } = useAppUrl();
  if (error) return <div>{error}</div>;
  if (loading) return <div>..Loading</div>;
  return (
    <>
      {" "}
      <img src={imgUrl}></img>
    </>
  );
}
/* if parent conditionally render its child then fetching of the child will take a while so
just handle all the fetching in the parent component*/
//u will most likely use conditional redering
export default App;
