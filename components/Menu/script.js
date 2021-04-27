export default {
    props: {
        menu: {
            type: Array,
            require: true,
            default() {
                return [
                    {
                        id: 1,
                        name: "HOME",
                        link:'/'
                    },
                    {
                        id: 2,
                        name: "BLOG",
                        link:'/blog'
                    },
                    {
                        id: 3,
                        name: "PRODUCT",
                        link:'/product'
                    },
                    {
                        id: 4,
                        name: "CONTACTS",
                        link:'/contacts'
                    },
                ];
            },
        },
    }
};