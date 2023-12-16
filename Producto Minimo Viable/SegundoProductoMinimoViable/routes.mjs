const routes = {
    login: {
        path: "/",
        component: "auth",
        html: true,
        handler: "login"
    },

    logout: {
        path:"/logout",
        component:"auth",
        handler: "logout"
    },
    
    home: {
        path: "/home",
        html: true,
        component: "home",
        handler: "homeHandler"
    },

    add_task: {
        path: "/new-task",
        html: 'create_task',
        component: "task",
        handler: "createHandler"
    }
};

export default routes;