/*const express=require('express');
const port=4010;
const path=require('path');
const app=express();
app.listen(port,()=>{console.log(`Server is running on port http://localhost:${port}`)});
app.get("/",(req,res)=>{
    
    res.sendFile(path.join(__dirname,"views","login.html"));
})*/
const express = require('express');
const path = require('path');

const app = express();
const port = 4010;
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images) if you have them in public folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'projof6thsem-ui', 'login.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

app.post('/login', (req, res) => {
    // Handle login logic here (e.g., validate credentials)
    console.log('Login attempt:', req.body);
    res.send('Login successful!');
});
