import { ApolloClient, InMemoryCache, gql, HttpLink } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://api-eu-central-1.graphcms.com/v2/cl346y93e5hfb01xmaqsqa6ps/master',
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const initialFetch = async () => {
  const { data } = await client.query({
    query: gql`
      query InitialQuery {
        room {
          id
          roomTypeId
          title
          price
          discountPrice
          bedsCount
          extraBedsCount
          roomsCount
          amenitiesID {
            id
            title
          }
          hotel {
            id
            title
            address
          }
          images {
            id
            url
            urlMin: url(transformation: { image: { resize: { width: 1000, fit: scale } } })
          }
          description {
            html
          }
        }
        bookingID(stage: DRAFT) {
          id
          from
          to
          rooms {
            id
          }
        }
        popularPlases {
          id
          title
          description
          address
          distance
          workingHours
          category {
            title
          }
        }
        categoryID {
          id
          title
        }
        bibliotel {
          id
          title
          address
        }
        galleryID {
          id
          description
          photos {
            id
            urlModal: url(transformation: { image: { resize: { width: 1500, fit: scale } } })
            urlMin: url(transformation: { image: { resize: { width: 1000, fit: scale } } })
            width
            height
          }
        }
        reviewID {
          id
          author
          text
          rating
        }
        contactID {
          id
          phone
          email
          address
        }
        bookingEmailID {
          id
          text {
            html
            text
          }
        }
      }
    `,
  });

  return data;
};

export const getSeoData = async () => {
  const { data } = await client.query({
    query: gql`
      query Seo {
        seoData {
          id
          keywords
          description
          ogTitle
          ogDescription
          ogImage {
            id
            url
          }
        }
      }
    `,
  });

  return (data.seoData || [])[0] || {};
};

export const getRooms = async () => {
  const { data } = await client.query({
    query: gql`
      query Rooms {
        room {
          id
          roomTypeId
          title
          price
          discountPrice
          bedsCount
          extraBedsCount
          roomsCount
          amenitiesID {
            id
            title
          }
          hotel {
            id
            title
            address
          }
          images {
            id
            urlModal: url(transformation: { image: { resize: { width: 1500, fit: scale } } })
            urlMin: url(transformation: { image: { resize: { width: 1000, fit: scale } } })
          }
          description {
            html
          }
        }
        bookingID(stage: DRAFT) {
          id
          from
          to
          rooms {
            id
          }
        }
      }
    `,
  });

  return { rooms: data.room, booking: data.bookingID };
};

export const getRoomById = async (id) => {
  const { data } = await client.query({
    query: gql`
      query room($id: ID!) {
        room(where: { id: $id }) {
          id
          roomTypeId
          title
          price
          discountPrice
          bedsCount
          roomsCount
          amenitiesID {
            id
            title
          }
          hotel {
            id
            title
          }
          images {
            id
            urlModal: url(transformation: { image: { resize: { width: 1500, fit: scale } } })
            urlMin: url(transformation: { image: { resize: { width: 1000, fit: scale } } })
          }
          description {
            html
          }
        }
      }
    `,
    variables: {
      id,
    },
  });

  return data.room[0];
};

export const getPopularCategoryes = async () => {
  const { data } = await client.query({
    query: gql`
      query Category {
        categoryID {
          id
          title
        }
      }
    `,
  });

  return data.categoryID;
};

export const getPopular = async () => {
  const { data } = await client.query({
    query: gql`
      query Popular {
        popularPlases {
          id
          title
          workingHours
          description
          address
          distance
          category {
            title
          }
        }
        categoryID {
          id
          title
        }
      }
    `,
  });

  return { popular: data.popularPlases, categories: data.categoryID };
};

export const getHotel = async () => {
  const { data } = await client.query({
    query: gql`
      query Hotel {
        bibliotel {
          id
          title
          address
        }
      }
    `,
  });

  return data.bibliotel;
};

export const getGalery = async () => {
  const { data } = await client.query({
    query: gql`
      query Galery {
        galleryID {
          id
          description
          photos {
            id
            url: url(transformation: { image: { resize: { width: 2000, fit: scale } } })
            urlMin: url(transformation: { image: { resize: { width: 1000, fit: scale } } })
            width
            height
          }
        }
      }
    `,
  });

  return (data.galleryID || []).flatMap((g) =>
    g.photos.map((p) => ({ ...p, description: g.description }))
  );
};

export const getReviews = async () => {
  const { data } = await client.query({
    query: gql`
      query Review {
        reviewID {
          id
          author
          text
          rating
        }
      }
    `,
  });

  return data.reviewID;
};

export const getContactInfo = async () => {
  const { data } = await client.query({
    query: gql`
      query Contacts {
        contactID {
          id
          phone
          email
          address
        }
      }
    `,
  });

  return (data.contactID || [])[0];
};

export const getBooking = async () => {
  const { data } = await client.query({
    query: gql`
      query BookingRooms {
        bookingID(stage: DRAFT) {
          id
          from
          to
          rooms {
            id
          }
        }
      }
    `,
    fetchPolicy: 'no-cache',
  });

  return data.bookingID;
};

export const getMailText = async () => {
  const { data } = await client.query({
    query: gql`
      query MailText {
        bookingEmailID {
          id
          text {
            html
          }
        }
      }
    `,
  });

  return (data.bookingEmailID || [])[0] || {};
};

export const postBooking = async (bookingProps) => {
  const { data } = await client.mutate({
    mutation: gql`
      mutation Booking(
        $from: Date!
        $to: Date!
        $roomiD: ID!
        $custumerName: String!
        $guests: String!
        $email: String!
        $phone: String!
        $comment: String!
      ) {
        createBooking(
          data: {
            from: $from
            to: $to
            rooms: { connect: { id: $roomiD } }
            custumerName: $custumerName
            guests: $guests
            email: $email
            phone: $phone
            comment: $comment
          }
        ) {
          id
          from
          to
          rooms {
            id
          }
        }
      }
    `,
    variables: bookingProps,
  });

  return data;
};
