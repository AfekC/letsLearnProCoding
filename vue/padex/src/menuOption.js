export default [{
        id: "1",
        title: "הודעה חדשה",
        component: "NewMail",
        isExtraDetails: false,
        icon: "mail",
        haveFavoriteOption: false
    },
    {
        id: "2",
        title: "דואר נכנס",
        component: "MailIn",
        isExtraDetails: true,
        icon: "inbox",
        haveFavoriteOption: true
    },
    {
        id: "3",
        title: "דואר יוצא",
        component: "MailOut",
        isExtraDetails: true,
        icon: "send",
        haveFavoriteOption: true
    },
    {
        id: "4",
        title: "דואר זבל",
        component: "Trash",
        isExtraDetails: false,
        icon: "delete",
        haveFavoriteOption: true
    },
]