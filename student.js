var Student = function(fn, ln, email, sid){
	this.first_name = fn;
	this.last_name = ln;

};

Student.prototype.register = function(course) {
	this.courses.push(course)
	return this.text;
};

module.exports = Crypto;
