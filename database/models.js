const Sequelize = require("sequelize")

// PostgreSQL Connection

const sequelize = new Sequelize('sqlite::memory')
const DataTypes = Sequelize.DataTypes

const test = sequelize.define('Test', {
    numberTest: DataTypes.NUMBER,
    answerTest: DataTypes.STRING
})

