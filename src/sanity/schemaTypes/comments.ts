 const commentSchema = {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'comment',
        title: 'Comment',
        type: 'text',
      },
      {
        name: 'post',  // Linking comment to a specific post
        title: 'Post',
        type: 'reference',
        to: [{ type: 'post' }],  // Refers to the "post" type schema
      },
    ],
  };
  export default commentSchema
  