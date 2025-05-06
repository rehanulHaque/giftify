/* eslint-disable  @typescript-eslint/no-explicit-any */
import { CarouselProductTypes, CarouselServiceTypes, ProductNamesTypes, ProductsNamesAndIds, ProductTypes, ServicesNamesAndIds, ServicesNamesTypes, ServicesTypes, SingleProductTypes } from '@/types';
import { request } from 'graphql-request';

export const getProducts = async (page = 1, itemsPerPage = 12) => {
  try {
    const skip = (page - 1) * itemsPerPage;
    const data = await request(
      process.env.HYGRAPH_API_KEY!,
      `
        query getProducts($first: Int!, $skip: Int!) {
          products(first: $first, skip: $skip) {
            id
            title
            price
            link
            description
            productImage {
              url
            }
          }
          productsConnection {
            aggregate {
              count
            }
          }
        }
      `,
      {
        first: itemsPerPage,
        skip: skip
      }
    ) as any
    
    return {
      products: data.products,
      totalCount: data.productsConnection.aggregate.count
    };
  } catch (error: any) {
    console.log(error.message);
    return { products: [], totalCount: 0 };
  }
}







  
  
  


  // Products----------------------------------------------------

export  const getFeatureProduct = async() => {
    const data = (await request(
        process.env.HYGRAPH_API_KEY!,
        `
        query getProducts {
           products(first: 2) {
            id
            title
            description
            link
            productImage {
              url
            }
            material
            feature
          }
        }
        `
      )) as ProductTypes
      return data.products
  }

  export const getProductNames = async () => {
    const data = (await request(
      process.env.HYGRAPH_API_KEY!,
      `
        query getProductsNames {
           products(first: 4) {
            id
            title
            link
          }
        }
        `
    )) as ProductNamesTypes;
    return data.products;
  };

  export const getProductsForCarousel = async () => {
    const data = (await request(
      process.env.HYGRAPH_API_KEY!,
      `
        query getProducts {
           products(first: 8) {
            id
            title
            link
            productImage {
              url
            }
          }
        }
        `
    )) as CarouselProductTypes;
    return data.products;
  };

  export const getSingleProduct = async (id: string) => {
    try {
      const data = (await request(
        process.env.HYGRAPH_API_KEY!,
        `
        query getSingleProduct {
      product(where: {link: "${id}"}) {
        id
        link
        feature
        description
        price
        material
        productImage {
          url
        }
        title
      }
    }
        `
      )) as SingleProductTypes;
      return data.product;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  export const getProductData = async () => {
    const data = (await request(
      process.env.HYGRAPH_API_KEY!,
      `
      query getProducts {
        products(first: 9) {
          id
          title
          link
          productImage {
            url
          }
        }
      }
      `
    )) as ProductTypes;
    return data.products;
  };

  export const getProductNameAndId = async () => {
    const data = (await request(
      process.env.HYGRAPH_API_KEY!,
      `
      query getProducts {
        products {
          id
          title
        }
      }
      `
    )) as ProductsNamesAndIds;
    return data.products;
  };

  // Services----------------------------------------------------
  export const getServicesNames = async () => {
    const data = (await request(
      process.env.HYGRAPH_API_KEY!,
      `
        query getServicesNames {
           services(first: 4) {
            id
            title
            link
          }
        }
        `
    )) as ServicesNamesTypes;
    return data.services;
  };

  export  const getServicesForCarousel = async () => {
    const data = (await request(
      process.env.HYGRAPH_API_KEY!,
      `
        query getServices {
           services(first: 8) {
            id
            title
            link
            serviceImage {
              url
            }
          }
        }
        `
    )) as CarouselServiceTypes;
    return data.services;
  };

  export const getSingleService = async (id: string) => {
    const data = (await request(
      process.env.HYGRAPH_API_KEY!,
      `
      query getSingalService {
        services(where: {link: "${id}"}) {
          description
            details {
              raw
            }
          id
          link
          title
          serviceImage {
            url
          }
        }
      }
      `
    )) as ServicesTypes;
    return data.services[0];
  };

export  const getServiceDetails = async () => {
    const data = (await request(
      process.env.HYGRAPH_API_KEY!,
      `
      query MyQuery {
    services(first: 6) {
      description
      details {
        raw
      }
      id
      link
      title
      serviceImage {
        url
      }
    }
  }
      `
    )) as ServicesTypes;
    return data.services;
  };


  export const getServicesNameAndId = async () => {
    const data = (await request(
      process.env.HYGRAPH_API_KEY!,
      `
      query getServices {
        services {
          id
          title
        }
      }
      `
    )) as ServicesNamesAndIds;
    return data.services;
  };