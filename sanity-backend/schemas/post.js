export default {
    name:'post',
    title: 'Post',
    type:'document',
    fields:[
        {
            name:'caption',
            title:'Caption',
            type:'string',
        },
        {
            name: 'video',
            title: 'Video',
            type: 'file',
            options: {
                hotspot: true,
            }
        },
        {
            name:'userId',
            title:'userId',
            type:'string',
        },
        {
            name:'postedBy',
            title:'Posted By',
            type:'postedBy'
        },
        {
            name:'Likes',
            title:'likes',
            type:'array',
            of:[
                {
                    type:'reference',
                    to: [{type:'user'}]
                },
            ],
        },
        {
            name:'comments',
            title: 'Comments',
            type:'array',
            of:[{type:'comment'}]
        },
        {
            name:'topic',
            title:'Topic',
            type:'string'
        },
    ]
}