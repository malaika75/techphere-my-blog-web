const postSchema = {
    name: 'post',
    title: 'post',
    type: 'document',
    fields:[
        {
        name:'title',
        type:'string',
        title: 'post title'
       },
       {
        name:'slug',
        type:'slug',
        title:'SLug',
        options:{
            source:'title'
        }
        },
       {
        name:'headline',
        type:'string',
        title: 'headline'
        },
       {
        name:'summary',
        type:'text',
        title: 'summary'
       },
       {
        name:'image',
        type:'image',
        title: 'image'
       },
       {
        name:'content',
        type:'array',
        title: 'content',
        of:[
            {
            type:'block'
           },
           {
            type: 'image', // Image blocks
            title: 'Image',
            options: {
            hotspot: true, // Enables image cropping
            },
        },
    ],
       },
       
    ]
}
export default postSchema