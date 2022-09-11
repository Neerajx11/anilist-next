import { gql } from "@apollo/client";

export const getPages = (page = 1, perPage = 50) => ({
  query: gql`
    query ($page: Int, $perPage: Int, $isAdult: Boolean) {
      Page(page: $page, perPage: $perPage) {
        media(isAdult: $isAdult) {
          title {
            english
            native
          }
          id
          episodes
          coverImage {
            large
            color
          }
          type
          genres
          averageScore
        }
        pageInfo {
          total
        }
      }
    }
  `,
  variables: {
    page: page,
    perPage,
    isAdult: false,
  },
});

export const getPageDetail = (id = 69) => ({
  query: gql`
    query Query($mediaId: Int) {
      Page {
        media(id: $mediaId) {
          id
          title {
            english
            native
          }
          type
          description
          status
          startDate {
            day
            month
            year
          }
          endDate {
            day
            month
            year
          }
          episodes
          countryOfOrigin
          coverImage {
            large
          }
          averageScore
          popularity
          rankings {
            id
            rank
          }
          characters {
            nodes {
              id
              name {
                full
              }
              description
              image {
                large
              }
              gender
              dateOfBirth {
                year
                month
                day
              }
              age
              bloodType
            }
          }
          genres
        }
      }
    }
  `,
  variables: {
    mediaId: id,
  },
});
