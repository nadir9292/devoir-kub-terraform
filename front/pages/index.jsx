import { Typography } from "@material-tailwind/react"
import axios from "axios"

const Home = () => {
  const searchedData = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
  })

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
