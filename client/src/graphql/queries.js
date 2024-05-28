import { gql } from "@apollo/client";

export const GET_ALL_BLOGPOSTS = gql`
  query GET_ALL_BLOGPOSTS {
    blogposts {
      title
      smallDescription
      description
      image {
        url
      }
      slug
    }
  }
`;

export const GET_ALL_PROJECTS = gql`
  query GET_ALL_PROJECTS {
    projects {
      title
      description
      images {
        url
      }
      course {
        title
      }
      slug
    }
  }
`;

export const GET_ALL_COURSES = gql`
  query GET_ALL_COURSES {
    courses {
      title
      description
      image {
        url
      }
      projects {
        id
        images {
          id
          url
        }
        slug
        title
        smallDescription
      }
    }
  }
`;
