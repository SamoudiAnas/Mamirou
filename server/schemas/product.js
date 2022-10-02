export default {
    name: "product",
    title: "Product",
    type: "document",
    fields: [
        {
            name: "image",
            title: "Image",
            type: "array",
            of: [{ type: "image" }],
            options: {
                hotspot: true,
            },
        },
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) =>
                Rule.required(true).error(
                    "Please check to give the product a name"
                ),
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 90,
            },
            validation: (Rule) =>
                Rule.required(true).error(
                    "Please make sure that the slug is not empty and unique"
                ),
        },
        {
            name: "colors",
            title: "Available Colors",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { value: "red", title: "Red" },
                    { value: "grey", title: "Grey" },
                    { value: "blue", title: "Blue" },
                    { value: "brown", title: "Brown" },
                    { value: "green", title: "Green" },
                    { value: "white", title: "White" },
                    { value: "black", title: "Black" },
                    { value: "yellow", title: "Yellow" },
                    { value: "purple", title: "Purple" },
                    { value: "orange", title: "Orange" },
                ],
            },
        },
        {
            name: "for",
            title: "For",
            type: "array",
            of: [{ type: "string" }],
            options: {
                list: [
                    { value: "men", title: "Men" },
                    { value: "women", title: "Women" },
                    { value: "children", title: "Children" },
                    { value: "pregnant-women", title: "Pregnant Women" },
                    { value: "other", title: "Other" },
                ],
            },
            validation: (Rule) =>
                Rule.required(true).error(
                    "Please check one of the categories in the list"
                ),
        },
        {
            name: "price",
            title: "Price",
            type: "number",
        },
        {
            name: "description",
            title: "Description",
            type: "string",
        },
        {
            title: "details",
            name: "Details",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};
