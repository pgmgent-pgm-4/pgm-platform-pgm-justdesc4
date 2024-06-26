import { gql } from "@apollo/client";

export const GET_ALL_TEAM_MEMBERS = gql`
  query GET_ALL_TEAM_MEMBERS {
    teammembers(first: 100) {
      name
      image {
        url
      }
      role
      category
    }
  }
`;

export const GET_ALL_SERVICES = gql`
  query GET_ALL_SERVICES {
    services {
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

export const GET_EDUCATIONS = gql`
  query GET_EDUCATIONS {
    educations {
      title
      description
      extraInfo
      expectation
      images {
        url
      }
      informationDay
      educationUrl
    }
  }
`;

export const GET_ALL_FOR_HOME = gql`
  query GET_ALL_FOR_HOME {
    educations {
      educationUrl
      title
      description
      images {
        url
      }
    }
    projects {
      title
      smallDescription
      slug
      images {
        url
      }
    }
    blogposts {
      title
      smallDescription
      slug
      image {
        url
      }
    }
    services {
      title
      smallDescription
      slug
      image {
        url
      }
    }
  }
`;

export const GET_EDUCATION_LINK = gql`
  query GET_EDUCATION_LINK {
    educations {
      educationUrl
    }
  }
`;
