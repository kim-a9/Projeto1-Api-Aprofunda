const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const tasks = [];

/*  GET /tasks - Listar tarefas
    GET /tasks/:id - Detalhar uma tarefa por id
    POST /tasks - Criar uma tarefa
    PUT /tasks/:id - Atualizar uma tarefa
    DELETE /tasks/:id - Deletar uma tarefa */

router.get('/tasks', (req, res) => {
    res.json(tasks);
});

router.get('/tasks/:id', (req, res) => {
    const {id} = req.params;
    const taskFound = tasks.find((t) => t.id === id);
    res.json(taskFound);
});

router.post('/tasks', (req, res) => {
    const { title, author, description, status } = req.body;

    const newTask = {
        id: uuidv4(),
        title: title,
        author: author, 
        description: description,
        status: status,
        created_at: new Date().toLocaleDateString('pt-BR'),
    }
    tasks.push(newTask);
    res.status(201).json({ message: `Task ${title} created successfully. `});
});

router.put('/tasks/:id', (req, res) => {
    const {id} = req.params;
    const { title, author, description, status } = req.body;

    const taskFound = tasks.find((t) => t.id === id);

    if (title || author || description || status != null) {
        taskFound.title = title;
        taskFound.author = author;
        taskFound.description = description;
        taskFound.status = status;
    }
    res.status(200).json({ message: `Task ${title} updated successfully. `})
    
});
    
router.delete('/tasks/:id', (req, res) => {
    const {id} = req.params;

    const updatedTasks = tasks.filter((t) => t.id ===id);

    res.json(updatedTasks);

});



app.use(router);
app.listen(PORT, () => console.log(`Server running on port ${PORT} successfully. `));

