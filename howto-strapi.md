# Strapi

When speaking about CMS all I knew before starting this project was Wordpress and I wasn't a fan of the fact that it was kind of complex, PHP-based and templates dependant. I started looking for more modern way of managing a website's content without having to build it yourself with a DB, an API, and a back-office. I found Strapi, which is a heasdless CMS with a simple interface and some really useful features, and after finding multiple videos/tutorials/docs on the Strapi/Next.js stack, I chosed to use it!

## Content Types

This is quite straight forward as this section is used to create and manage our different content types and categories of data. It's best to call a Collection Type with a singular word as Strapi will automatically make it plural for the list and also adapt it for the endpoints.  
Once a Content Type is created, in order to configure the endpoints to be accessible you need to configure them in the `Users & Permission` settings, allowing the possibility of getting data directly from a endpoint without any authentication.

## Webhook

When updating data in Strapi, you publish them. It will automatically update what the endpoints are returning but since Next.js needs to be built again to display new data, we need to trigger a new build each time new data is published in Strapi. In the `Global Settings` it is possible to do so by configuring a webhook that would be triggered everytime needed.
