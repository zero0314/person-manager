const base = {
    get() {
        return {
            url : "http://localhost:8080/springbooti5oc6/",
            name: "springbooti5oc6",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbooti5oc6/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "人事管理小程序"
        } 
    }
}
export default base
