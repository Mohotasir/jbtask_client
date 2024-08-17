import axios from "axios";

const axiosPublic = axios.create({
    baseURL : "https://job-task-server-red.vercel.app/"
})
export default function useAxios() {
  return axiosPublic;
}