let _singleton = Symbol();
const COURSE_API_URL = 'https://cs4550-summer2-18-react-blau.herokuapp.com/api/course';
const LESSON_API_URL = 'https://cs4550-summer2-18-react-blau.herokuapp.com/api/lesson';


export default class LessonServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new LessonServiceClient(_singleton);
        return this[_singleton]
    }

    findAllLessons() {
        return fetch(
            LESSON_API_URL, {
                headers: {'Content-Type': 'application/json'}
            })
            .then(function(response) {
                return response.json();
            });
    }

    findLessonById(lessonId) {
        return fetch(LESSON_API_URL + '/' + lessonId)
            .then(function(response) {
                return response.json();
            });
    }

    findAllLessonsForModule(courseId, moduleId) {
        return fetch(COURSE_API_URL + '/' + courseId + '/module/' + moduleId + '/lesson')
            .then(function(response) {
                return response.json();
            });
    }

    createLesson(courseId, moduleId, lesson) {
        return fetch(
            COURSE_API_URL + '/' + courseId + '/module/' + moduleId + '/lesson', {
                 body: JSON.stringify(lesson),
                 method: 'POST',
                 headers: {'Content-Type': 'application/json'}
            })
            .then(function(response) {
                return response.json();
            });
    }

    deleteLesson(lessonId) {
        return fetch(
            LESSON_API_URL + '/' + lessonId, {
                 method: 'DELETE',
            })
            .then(function(response) {
                return response;
            });
    }

    updateLesson(lessonId) {
        return fetch(
            LESSON_API_URL + '/' + lessonId, {
                 method: 'PUT',
                 body: JSON.stringify(lessonId),
                 headers: {'content-type': 'application/json'}
            });
    }
}

