import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a5b85c9c-857d-4025-b5e2-88405f8ecdff"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const followAPI = {
    follow(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`, {})
            .then(response => response.data)
    }
}

export const authAPI = {
    userData() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe = false, captcha = null){
        return instance.post('auth/login', { email, password, rememberMe, captcha } )
    },
    logout() {
        return instance.delete('auth/login')
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
}

export const profileAPI = {
    getUser(userId) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instance.get('profile/status/' + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', { status })
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        } )
    },
    saveProfile(profile) {
        return instance.put('profile', profile)
    }
}


