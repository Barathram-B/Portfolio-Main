export default {
  name: "certification",
  title: "Certification",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    {
      name: "image",
      title: "Certificate Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "issuer",
      title: "Issued By",
      type: "string",
    },
    {
      name: "link",
      title: "Certificate Link",
      type: "url",
    }
  ],
};