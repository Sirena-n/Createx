module.exports = class UserDto {
    email;
    id;
    isActivated;
    isTeacher;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
        this.isTeacher = model.isTeacher;
    };
};