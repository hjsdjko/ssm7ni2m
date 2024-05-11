const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm7ni2m/",
            name: "ssm7ni2m",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm7ni2m/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "微信小程序软件缺陷管理系统"
        } 
    }
}
export default base
