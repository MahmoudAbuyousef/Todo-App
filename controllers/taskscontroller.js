const Task = require("../models/tasksmodel");
module.exports = {
	index: async (req, res) => {
		try {
			const showTasks = await Task.find({});
			res.render("todo.ejs", { todoTask: showTasks });
		} catch (error) {
			console.log(`there was an error: ${error}`);
		}
	},
	create: async (req, res) => {
		const firstTask = await new Task({ title: req.body.title });
		firstTask.save().then(() => res.redirect("/"));
	},
	edit: async (req, res) => {
		try {
			const id = req.params.id;
			const updateTask = await Task.find({});
			res.render("todoEdit.ejs", { todoTask: updateTask, idTask: id });
		} catch (error) {
			console.log(`there was an error: ${error}`);
		}
	},
	update: async (req, res) => {
		try {
			const id = req.params.id;
			await Task.findByIdAndUpdate(id, { title: req.body.title });
			res.redirect("/");
		} catch (error) {
			console.log(`there was an error: ${error}`);
		}
	},
	delete: async (req, res) => {
		try {
			await Task.deleteOne({ _id: req.params.id });
			res.redirect("/");
		} catch (error) {
			console.log(`there was an error: ${error}`);
		}
	},
};
