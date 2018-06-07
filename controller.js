const model = require("./model.js");
const view = require('./view.js');

class Controller {
	static help() {
		view.help();
	}

  static list() {
    view.list(model.list());
  }

	static add(taskName) {
		model.add(taskName);
		// let todoList = model.list()
		view.add(taskName);
	}

  static find(taskId) {
    view.find(model.find(taskId));
  }

  static delete(taskId) {
    view.delete(model.delete(taskId));
  }

  static check(taskId) {
    model.check(taskId);
    view.list(model.list());
  }

  static uncheck(taskId) {
    model.uncheck(taskId);
    view.list(model.list());
  }

  static listOutstanding(sortType) {
    if (!sortType) {
      sortType = "asc";
    }

    if (sortType === "asc") {
      view.list(model.listOutstandingAscending());
    } else if (sortType === "desc") {
      view.list(model.listOutstandingDescending());
    }
  }

  static listCompleted(sortType) {
    if (!sortType) {
      sortType = "asc";
    }

    if (sortType === "asc") {
      view.list(model.listCompletedAscending());
    } else if (sortType === "desc") {
      view.list(model.listCompletedDescending());
    }
  }

  static assignTag(taskId, arrOfTags) {
    view.assignTag(taskId, model.assignTag(taskId, arrOfTags));
  }

  static getTasksByTags(tag) {
    view.getTasksByTags(model.getTasksByTags(tag));
  }

}

module.exports = Controller;
