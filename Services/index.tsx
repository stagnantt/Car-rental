import request, { gql } from "graphql-request";

export const getCarsList = async () => {
  const query = gql`
  query CarLists {
    carLists {
      carAvg
      carSeat
      id
      name
      price
      publishedAt
      updatedAt
      createdAt
      image {
        url
      }
      carType
      carBrand
    }
  }
  `


    const result=await request('https://api-ap-northeast-1.hygraph.com/v2/clw5yqz5y06o807uo34oehsq6/master', query);
    return result;
}