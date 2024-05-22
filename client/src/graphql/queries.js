import { gql } from "@apollo/client";

export const GET_ALL_COURSES = gql`
  query GET_ALL_COURSES {
    courses {
      title
      description
      image {
        url
      }
    }
  }
`;
