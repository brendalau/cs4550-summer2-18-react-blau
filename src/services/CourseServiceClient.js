let _singleton = Symbol();
const COURSE_API_URL = 'http://localhost:8080/api/course';

export default class CourseServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new CourseServiceClient(_singleton);
        return this[_singleton]
    }

    findAllCourses() {
        return fetch(
            COURSE_API_URL, {
                headers: {'Content-Type': 'application/json'}
            })
            .then(function(response) {
                return response.json();
            });
    }

    findCourseById(courseId) {
        return fetch(COURSE_API_URL + '/' + courseId)
            .then(function(response) {
                return response;
            });
    }

    createCourse(course) {
        return fetch(
            COURSE_API_URL, {
                body: JSON.stringify(course),
                method: 'POST',
                headers: {'Content-Type': 'application/json'}
            })
            .then(function(response) {
                return response.json();
            });
    }

    deleteCourse(courseId) {
        return fetch(
            COURSE_API_URL + '/' + courseId, {
                method: 'DELETE',
            })
            .then(function(response) {
                return response;
            });
    }

    updateCourse(courseId) {
        return fetch(
            COURSE_API_URL + '/' + courseId, {
                method: 'put',
                body: JSON.stringify(courseId),
                headers: {'content-type': 'application/json'}
            });
    }
}

