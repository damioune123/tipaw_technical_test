import axios from 'axios';
class AjaxRequests {
    /**
     *
     * @type {AxiosInstance}
     */
    axiosRequest = null;

    init = () => {
        this.axiosRequest = axios.create({
            baseURL: process.env.REACT_APP_API_URL
        });
        this.setAxiosHeaders({
            "Content-Type": "application/json"
        });
    };
    setAxiosHeaders = function(headers) {
        const headerKeys = Object.keys(headers);
        headerKeys.forEach(
            function(value) {
                this.axiosRequest.defaults.headers.common[value] = headers[value];
            }.bind(this)
        );
    };

    // API REQUESTS
    createContact = (values)=>{
        return this.axiosRequest.post('/contacts', values);
    }
}
const ajaxRequest = new AjaxRequests();
ajaxRequest.init();
export default ajaxRequest;


