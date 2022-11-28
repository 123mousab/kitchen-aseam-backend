const actions = {

    // test({ }) {

    //     return new Promise((resolve, reject) => {
    //         axios.get(window.server_url + `/api/admin/divisions`)
    //             .then((response) => {
    //                 // let roles= ['resturants', 'constants'];
    //                 let roles= ['constants', 'resturants', 'sales', 'reports', 'usersAndRoles'];
    //                 resolve(roles);
    //             })
    //             .catch((error) => {
    //                 reject(error)
    //             })
    //     })
    // },
    getData({ }) {

        return new Promise((resolve, reject) => {
            axios.get(window.server_url + `/api/admin/admins/roles`
            // ,
            //  {
            //     params: queryParams
            // }
            )
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },

    findData({ }, id) {
        return new Promise((resolve, reject) => {
            axios.get(window.server_url + `/api/admin/divisions/${id}`)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },

    saveData({ }, data) {
        console.log(data)
        return new Promise((resolve, reject) => {
            axios.post(window.server_url + `/api/admin/divisions`, data)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },

    updateData({ }, data) {
        return new Promise((resolve, reject) => {
            axios.post(window.server_url + `/api/admin/divisions/${data.id}`, data)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },

    updateStatus({ }, data) {
        return new Promise((resolve, reject) => {
            axios.put(window.server_url + `/api/admin/divisions`, JSON.parse(data))
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },

    updateImage({ }, data) {
        return new Promise((resolve, reject) => {
            let form = new FormData();
            if (data.image) form.append('image', data.image);
            axios.post(window.server_url + `/api/admin/divisions/upload_image/${data.id}`, form)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },

    removeData({ }, id) {
        return new Promise((resolve, reject) => {
            axios.delete(window.server_url + `/api/admin/divisions`, {
                data: {
                    ids: id
                }
            })
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

}
export default {
    namespaced: true,
    actions,
}
