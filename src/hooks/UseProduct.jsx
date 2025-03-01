import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useProduct() {
  function getRecent() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
  }
  let responseObject = useQuery({
    queryKey: ["recentProducts"],
    queryFn: getRecent,
    staleTime: 5000,
  });
  return responseObject;
}
