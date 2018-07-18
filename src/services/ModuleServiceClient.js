let _singleton = Symbol();
const COURSE_API_URL = 'http://localhost:8080/api/course';
const MODULE_API_URL = 'http://localhost:8080/api/module';

export default class ModuleServiceClient {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new ModuleServiceClient(_singleton);
        return this[_singleton]
    }

    findAllModules() {
        return fetch(
            MODULE_API_URL, {
                headers: {'Content-Type': 'application/json'}
            })
            .then(function(response) {
                return response.json();
            });
    }

    findModuleById(moduleId) {
        return fetch(MODULE_API_URL + '/' + moduleId)
            .then(function(response) {
                return response.json();
            });
    }

    findAllModulesForCourse(courseId) {
        return fetch(COURSE_API_URL + '/' + courseId + '/module')
            .then(function(response) {
                return response.json();
            });
    }

    createModule(courseId, module) {
        return fetch(
            COURSE_API_URL + '/' + courseId + '/module', {
                body: JSON.stringify(module),
                method: 'POST',
                headers: {'Content-Type': 'application/json'}
            })
            .then(function(response) {
                return response.json();
            });
    }

    deleteModule(moduleId) {
        return fetch(
            MODULE_API_URL + '/' + moduleId, {
                method: 'DELETE',
            })
            .then(function(response) {
                return response;
            });
    }

    updateModule(moduleId) {
        return fetch(
            MODULE_API_URL + '/' + moduleId, {
                 method: 'PUT',
                 body: JSON.stringify(moduleId),
                 headers: {'content-type': 'application/json'}
             });
    }
}

