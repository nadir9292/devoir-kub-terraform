import { Typography } from "@material-tailwind/react"
import axios from "axios"
import { useState, useEffect } from "react"

const Home = () => {
  const [searchedData, setSearchedData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://4.225.75.248:3000/employees")
        setSearchedData(response.data)
      } catch (error) {
        setSearchedData([
          { id: 1, name: "NADIR" },
          { id: 2, name: "QUENTIN" },
        ])
      }
    }

    fetchData()
  }, [])

  return (
    <div className="grid grid-cols-1 gap-4 ">
      <div className="mt-8 mb-2 w-96 grid grid-cols-1 mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          {searchedData && searchedData.length > 0 ? (
            searchedData.map(({ id, name }, index) => (
              <div
                key={index}
                className="hover:scale-105 shadow-lg bg-red-400 py-4 px-4 rounded-xl"
              >
                <div className="mt-4 grid grid-cols-1">
                  <Typography color="white" className="items-center font-bold">
                    {id} - {name}
                  </Typography>
                </div>
              </div>
            ))
          ) : (
            <p>No data found</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
