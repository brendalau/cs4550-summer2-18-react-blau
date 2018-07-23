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
                return response.json();
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

    updateCourse(courseId, course) {
        return fetch(
            COURSE_API_URL + '/' + courseId, {
                method: 'PUT',
                body: JSON.stringify(course),
                headers: {'content-type': 'application/json'}
            });
    }
}

