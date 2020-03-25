const course = {
    title: 'JavaScript - The Complete Guide'
};

Reflect.setPrototypeOf(course, {
    toString() {
        return this.title
    }
});

const courseHandler = {
    get(obj, propName) {
        if(propName === 'length') {
            return 0;
        }
        return obj[propName] || 'Not Found';
    }
}

const pCourse = new Proxy(course, courseHandler);
console.log(pCourse.title, pCourse.length);
