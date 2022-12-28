import { useState, useEffect } from "react"

function useFetch(url: string) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.products);
      })
  }, [url]);

  return data
}

export default useFetch