import axios from '../axios';

const getCourses = async () => {
    const resp = await axios.get(`/api/courses`);
    return { data: resp.data };
};
const getCourseById = async (id) => {
    const resp = await axios.get(`/api/courses/${id}`);
    return { data: resp.data };
};
export { getCourses, getCourseById };
