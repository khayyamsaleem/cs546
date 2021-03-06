const aboutRoutes = require("./about")
const storyRoutes = require("./story")
const educationRoutes = require("./education")

const constructor = (app) => {

    app.use("/about", aboutRoutes)
    app.use("/story", storyRoutes)
    app.use("/education", educationRoutes)

    app.use('*', (req,res) => {
        res.status(404).json({error: "Not Found"})
    })
}

module.exports = constructor;
