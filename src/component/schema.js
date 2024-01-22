import * as yup from "yup"

export const bookschema=yup.object({
    title: yup.string().required("*Book Title is required*"),
    ISBNnumber: yup.string().required("*ISBN Number is required*"),
    PublicationDate: yup.string().required("*PublicationDate is required*"),
    authorname: yup.string().required("*AuthorName is required*"),
    birth: yup.string().required("*Date Of Birth is required*"),
    description: yup.string().required("*Short bio is required*"),
})


