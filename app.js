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
    },
    set(obj, propName, newVal) {
        console.log('Sending data ...');
        
        if(propName ==='rating'){
            return;
        }else {
            obj[propName] = newVal
        }
    }
}

const pCourse = new Proxy(course, courseHandler);
pCourse.rating =5;
console.log(pCourse.title, pCourse.length);
