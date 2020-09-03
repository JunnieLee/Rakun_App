import gql from "graphql-tag"

export const GET_EVENT_DATA = gql`
  query MyQuery($genreId: String!) {
      performances(genreId: $genreId)(order_by: {id: asc}) {
        name
        id
        genreId
        startDate
        endDate
        hearts
        expected_ratings
        posterUrl
        total_ratings
        performance_favorites {
          user {
            id
          }
        }
      }
}
`
