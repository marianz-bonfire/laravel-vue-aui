import IconWrapper from './IconWrapper';

export default {
    name: 'SubtaskIcon',
    props: {
        size: {
            type: String
        },
        primaryColor: {
            type: String
        },
        secondaryColor: {
            type: String
        }
    },
    render(h) {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M19 7c1.105.003 2 .899 2 2.006v9.988A2.005 2.005 0 0 1 18.994 21H9.006A2.005 2.005 0 0 1 7 19h11c.555 0 1-.448 1-1V7zM3 5.006C3 3.898 3.897 3 5.006 3h9.988C16.102 3 17 3.897 17 5.006v9.988A2.005 2.005 0 0 1 14.994 17H5.006A2.005 2.005 0 0 1 3 14.994V5.006zM5 5v10h10V5H5z"/><path d="M7.707 9.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L9 10.586 7.707 9.293z"/></g></svg>' } });
    }
};
