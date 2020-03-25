const course = {
    title: 'JavaScript - The Complete Guide'
};

Reflect.setPrototypeOf(course, {
    toString() {
        return this.title
    }
});

// Reflect.deleteProperty(course,'title');
// Object.deleteProperty(course, 'title');
// delete course.title;
console.log(course.toString());
