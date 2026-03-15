const { error } = require('console')
const express = require('express')
const mongoose =require('mongoose')
require('dotenv').config();
const cors = require('cors');

const LoginRegister = require("./Router/LoginRouter")
const Classes = require("./Router/clasesRouter")
const Student = require("./Router/StudentRout")
const Teacher = require("./Router/TeacheRout")
const AttendanceRouter = require("./Router/AttendentRout")
const PeriodRouter = require("./Router/periodRout")
const FinanceRouter = require("./Router/FinanceRouter")



// Register 


const app = express()
// app.use(cors());

app.use(cors({
  origin: "*",
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

app.use(LoginRegister)
app.use(Classes)
app.use(Student)
app.use(Teacher)
app.use(AttendanceRouter)
app.use("/period", PeriodRouter)
app.use(FinanceRouter)


const PORT = process.env.PORT || 3000

// mongoose.connect(process.env.API).then(()=>{
//     console.log("✅ SuccessFull connect Detabase ")
// }).catch((error) => console.log(error))

mongoose.connect(process.env.API)
.then(()=>{
    console.log("✅ SuccessFull connect Detabase")
})
.catch((error)=>{
    console.log("❌ Database Error:",error)
})



app.listen(PORT , console.log(`'✅ IS RUNNING SERVER ${PORT}`))