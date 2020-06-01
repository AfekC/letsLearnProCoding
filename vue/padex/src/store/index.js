import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currOption: { isExtraDetails: true },
        mailToShow: {},
        favoriteOnly: false,
        mailsIn: [{
                id: 1,
                title: 'Hi',
                sent: new Date("2020-5-25 18:51"),
                from: 'Aladin',
                content: 'yes yes yes',
                mailEvent: { favorite: false, replied: false }
            },
            {
                id: 2,
                title: 'By',
                sent: new Date("2020-5-25 15:51"),
                from: 'Barni',
                content: 'no no no',
                mailEvent: { favorite: false, replied: false }
            }
        ],
        mailsOut: [],
        trash: [{
            id: 3,
            title: 'asdasd',
            sent: new Date("2020-5-24 18:51"),
            from: 'Me',
            content: 'casdawd',
            mailEvent: { favorite: false, replied: false }
        }],
        nextMailId: 4
    },
    mutations: {
        setCurrOption(state, newOption) {
            state.currOption = newOption
        },
        setMailToShow(state, mail) {
            state.mailToShow = mail
        },
        setFavoriteOnly(state, favoriteOption) {
            state.favoriteOnly = favoriteOption
        },
        removeMailIn(state, mail) {
            state.mailsIn.splice(state.mailsIn.map(function(item) { return item.id; }).indexOf(mail.id), 1)
        },
        addMailIn(state, mail) {
            state.mailsIn.push(mail)
        },
        removeMailOut(state, mail) {
            state.mailsOut.splice(state.mailsOut.map(function(item) { return item.id; }).indexOf(mail.id), 1)
        },
        addMailOut(state, mail) {
            state.mailsOut.push(mail)
        },
        removeTrashMail(state, mail) {
            state.trash.splice(state.trash.map(function(item) { return item.id; }).indexOf(mail.id), 1)
        },
        addTrashMail(state, mail) {
            state.trash.push(mail)
        },
        increaseNextId(state) {
            state.nextMailId++
        },
        changeInMailFavorite(state, id) {
            let mailToChange = state.mailsIn.find(mail => mail.id === id)
            mailToChange.mailEvent.favorite = !mailToChange.mailEvent.favorite
        },
        changeOutMailFavorite(state, id) {
            let mailToChange = state.mailsOut.find(mail => mail.id === id)
            mailToChange.mailEvent.favorite = !mailToChange.mailEvent.favorite
        },
        changeTrashMailFavorite(state, id) {
            let mailToChange = state.trash.find(mail => mail.id === id)
            mailToChange.mailEvent.favorite = !mailToChange.mailEvent.favorite
        }
    },
    actions: {
        setCurrOption: ({ commit }, newOption) => {
            commit('setCurrOption', newOption);
        },
        setMailToShow({ commit }, mail) {
            commit('setMailToShow', mail);
        },
        setFavoriteOnly({ commit }, favoriteOption) {
            commit('setFavoriteOnly', favoriteOption);
        },
        reply({ commit }, mail) {
            commit('removeMailIn', mail)
            mail.mailEvent.replied = true
            commit('addMailOut', mail)
        },
        newMail({ commit }, mail) {
            commit('addMailOut', mail)
            commit('increaseNextId')
        },
        newMailToMySelf({ commit }, mail) {
            commit('addMailIn', mail)
            commit('increaseNextId')
        },
        changeFavoriteOption({ commit }, {
            mail,
            mailType
        }) {
            if (mailType === "MailIn") {
                commit('changeInMailFavorite', mail.id)
            } else if (mailType === "MailOut") {
                commit('changeOutMailFavorite', mail.id)
            } else {
                commit('changeTrashMailFavorite', mail.id)
            }
        },
        throwMailToTrash({ commit }, mail) {
            commit('removeMailIn', mail)
            commit('addTrashMail', mail)
        },
        returnMailFromTrash({ commit }, mail) {
            commit('removeTrashMail', mail)
            commit('addMailIn', mail)
        },

    },
})