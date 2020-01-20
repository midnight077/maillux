import axios from '../axios';

const getCourses = async () => {
    const resp = await axios.get(`/api/courses`);
    return { data: resp.data };
};
export { getCourses };
